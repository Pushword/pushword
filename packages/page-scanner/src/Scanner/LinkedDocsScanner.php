<?php

namespace Pushword\PageScanner\Scanner;

use Doctrine\ORM\EntityManagerInterface;
use PiedWeb\Curl\ExtendedClient;
use PiedWeb\Curl\Helper;
use PiedWeb\Extractor\CanonicalExtractor;
use PiedWeb\Extractor\Url;
use Pushword\Core\Repository\Repository;
use Pushword\Core\Twig\AppExtension;
use Pushword\Core\Utils\F;
use Symfony\Component\DomCrawler\Crawler as DomCrawler;

/**
 * Permit to find error in image or link.
 */
final class LinkedDocsScanner extends AbstractScanner
{
    /**
     * @var array<string, bool>
     */
    private array $everChecked = [];

    private int $linksCheckedCounter = 0;

    private ?DomCrawler $domPage = null;

    /**
     * @var array<string, mixed>
     */
    private array $urlExistCache = [];

    public function __construct(private EntityManagerInterface $entityManager, private string $publicDir)
    {
    }

    // Starting point called from AbstractSanner::scan
    protected function run(): void
    {
        $this->linksCheckedCounter = 0;

        if ($this->page->hasRedirection()) {
            $this->checkLinkedDoc($this->page->getRedirection());

            return;
        }

        // 2. Je récupère tout les liens et je les check
        // href="", data-rot="" data-img="", src="", data-bg
        if ('' !== $this->pageHtml && '0' !== $this->pageHtml) {
            $this->checkLinkedDocs($this->getLinkedDocs());
        }
    }

    /**
     * @param string|string[] $var
     */
    private static function prepareForRegex(array|string $var): string
    {
        if (\is_string($var)) {
            return preg_quote($var, '/');
        }

        $var = array_map('static::prepareForRegex', $var); // @phpstan-ignore-line

        return '('.implode('|', $var).')';
    }

    private static function isWebLink(string $url): bool
    {
        return (bool) \Safe\preg_match('@^((?:(http:|https:)//([\w\d-]+\.)+[\w\d-]+){0,1}(/?[\w~,;\-\./?%&+#=]*))$@', $url);
    }

    /**
     * @return string[]
     */
    private function getLinkedDocs(): array
    {
        $urlInAttributes = ' '.self::prepareForRegex(['href', 'data-rot', 'src', 'data-img', 'data-bg']);
        $regex = '/'.$urlInAttributes.'=((["\'])([^\3]+)\3|([^\s>]+)[\s>])/iU';
        \Safe\preg_match_all($regex, $this->pageHtml, $matches);

        $linkedDocs = [];
        $matchesCount = is_countable($matches[0]) ? \count($matches[0]) : 0;
        for ($k = 0; $k < $matchesCount; ++$k) {
            $uri = $matches[4][$k] ?? $matches[5][$k];
            $uri = 'data-rot' == $matches[1][$k] ? AppExtension::decrypt($uri) : $uri;
            $uri .= $matches[4][$k] ? '' : '#(encrypt)'; // not elegant but permit to remember it's an encrypted link
            if (self::isMailtoOrTelLink($uri) && 'data-rot' != $matches[1][$k]) {
                $this->addError('<code>'.$uri.'</code> '.$this->trans('page_scan.encrypt_mail'));
            } elseif ('' !== $uri && self::isWebLink($uri)) {
                $linkedDocs[] = $uri;
            }
        }

        return array_unique($linkedDocs);
    }

    private static function isMailtoOrTelLink(string $uri): bool
    {
        return str_contains($uri, 'tel:') || str_contains($uri, 'mailto:');
    }

    private function removeParameters(string $url): string
    {
        if (str_contains($url, '?')) {
            $url = F::preg_replace_str('/(\?.*)$/', '', $url);
        }

        if (str_contains($url, '#')) {
            $url = F::preg_replace_str('/(#.*)$/', '', $url);
        }

        return $url;
    }

    private function removeBase(string $url): string
    {
        if ('' !== $this->page->getHost() && str_starts_with($url, 'https://'.$this->page->getHost())) {
            return \Safe\substr($url, \strlen('https://'.$this->page->getHost()));
        }

        return $url;
    }

    public function getLinksCheckedCounter(): int
    {
        return $this->linksCheckedCounter;
    }

    /**
     * @param array<mixed> $linkedDocs
     */
    private function checkLinkedDocs(array $linkedDocs): void
    {
        foreach ($linkedDocs as $linkedDoc) {
            ++$this->linksCheckedCounter;
            if (! \is_string($linkedDoc)) {
                continue; // TODO Log ?!
            }

            $this->checkLinkedDoc($linkedDoc);
        }
    }

    private function checkLinkedDoc(string $url): void
    {
        // internal
        $uri = $this->removeBase($url);
        if (! isset($uri[0])) {
            $this->addError('<code>'.$url.'</code> empty link');

            return;
        }

        if ('/' == $uri[0]) {
            if (! $this->uriExist($this->removeParameters($uri))) {
                $this->addError('<code>'.$url.'</code> '.$this->trans('page_scan.not_found'));
            }

            return;
        }

        // external
        if (str_starts_with($url, 'http')) {
            if (! $this->patchUnreachableDomain($url) && true !== ($errorMsg = $this->urlExist($url))) {
                $this->addError('<code>'.$url.'</code> '.$errorMsg);
            }

            return;
        }

        // anchor/bookmark/jump link
        if (str_starts_with($url, '#')) {
            if (! $this->targetExist(\Safe\substr($url, 1))) {
                $this->addError('<code>'.$url.'</code> target not found');
            }

            return;
        }

        // TODO: log unchecked link dump($uri);
    }

    private function patchUnreachableDomain(string $url): bool
    {
        return (bool) \Safe\preg_match('/^https:\/\/(www)?\.?(example.tld|instagram.com)/i', $url);
    }

    private function getDomPage(): DomCrawler
    {
        if (null !== $this->domPage) {
            return $this->domPage;
        }

        return new DomCrawler($this->pageHtml);
    }

    private function targetExist(string $target): bool
    {
        return null !== $this->getDomPage()
            ->filter('[name*="'.$target.'"],[id*="'.$target.'"]')
            ->getNode(0);
    }

    /**
     * this is really slow on big website.
     *
     * @return bool|mixed|string
     */
    private function urlExist(string $url)
    {
        if (isset($this->urlExistCache[$url])) {
            return $this->urlExistCache[$url];
        }

        $client = new ExtendedClient($url);
        $client
            ->setDefaultSpeedOptions()
            ->fakeBrowserHeader()
            ->setNoFollowRedirection()
            ->setMaximumResponseSize()
            ->setDownloadOnlyIf([Helper::class, 'checkStatusCode'])
            ->setMobileUserAgent();
        // if ($this->proxy) { $client->setProxy($this->proxy); }
        $client->request();

        if (200 !== $client->getCurlInfo(\CURLINFO_HTTP_CODE) && 0 !== $client->getCurlInfo(\CURLINFO_HTTP_CODE)) {
            return $this->urlExistCache[$url] = $this->trans('page_scan.status_code').' ('.$client->getCurlInfo(\CURLINFO_HTTP_CODE).')';
        }

        if ($client->getError() > 0) {
            return $this->urlExistCache[$url] = $this->trans(
                'page_scan.unreachable',
                92832 === $client->getError() ? [' - errorMessage' => ''] : ['errorMessage' => $client->getErrorMessage()]
            );
        }

        $canonical = new CanonicalExtractor(new Url($url), new DomCrawler($client->getResponse()->getBody()));
        if ($canonical->canonicalExists()
            && (! $canonical->isCanonicalPartiallyCorrect() || ! $canonical->isCanonicalCorrect())) {
            return $this->urlExistCache[$url] = $this->trans('page_scan.canonical').' ('.$canonical->get().')';
        }

        return $this->urlExistCache[$url] = true;
    }

    private function uriExist(string $uri): bool
    {
        $slug = ltrim($uri, '/');

        if (isset($this->everChecked[$slug])) {
            return $this->everChecked[$slug];
        }

        $checkDatabase = ! str_starts_with($slug, 'media/'); // we avoid to check in db the media, file exists is enough

        $page = $checkDatabase ? Repository::getPageRepository($this->entityManager, $this->page::class)
            ->getPage($slug, $this->page->getHost(), true) :
            null;

        $this->everChecked[$slug] = (
            ! $page instanceof \Pushword\Core\Entity\PageInterface
                && ! file_exists($this->publicDir.'/'.$slug)
                && ! file_exists($this->publicDir.'/../'.$slug)
                && 'feed.xml' !== $slug
        ) ? false : true;

        return $this->everChecked[$slug];
    }
}
