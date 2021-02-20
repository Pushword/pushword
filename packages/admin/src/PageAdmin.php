<?php

namespace Pushword\Admin;

use Pushword\Admin\FormField\Event as FormEvent;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Object\Metadata;
use Sonata\AdminBundle\Object\MetadataInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class PageAdmin extends AbstractAdmin implements PageAdminInterface
{
    use AdminTrait;

    public $supportsPreviewMode = true;

    protected $messagePrefix = 'admin.page';

    protected $datagridValues = [
        '_page' => 1,
        '_sort_order' => 'DESC',
        '_sort_by' => 'updatedAt',
        '_per_page' => 256,
    ];

    protected array $fields = [];

    protected $perPageOptions = [16, 250, 1000];

    protected $maxPerPage = 1000;

    private EventDispatcherInterface $eventDispatcher;

    public function __construct($code, $class, $baseControllerName)
    {
        parent::__construct($code, $class, $baseControllerName);
        $this->listModes['tree'] = [
            'class' => 'fa fa-sitemap',
        ];
    }

    /** @required */
    public function setEventDispatcher(EventDispatcherInterface $eventDispatcher): void
    {
        $this->eventDispatcher = $eventDispatcher;
    }

    /**
     * Check if page entity's item $name exist.
     */
    protected function exists(string $name): bool
    {
        return method_exists($this->pageClass, 'get'.$name);
    }

    // todo documenter
    protected function getFormFields(string $key = 'admin_page_form_fields')
    {
        $fields = $this->apps->get()->get($key);

        $event = new FormEvent($this, $fields);
        $this->eventDispatcher->dispatch($event, FormEvent::NAME);

        return $event->getFields();
    }

    protected function configureFormFields(FormMapper $formMapper): void
    {
        $fields = $this->getFormFields();

        $formMapper->with('admin.page.mainContent.label', ['class' => 'col-md-9 mainFields']);
        foreach ($fields[0] as $field) {
            $this->addFormField($field, $formMapper);
        }
        $formMapper->end();

        foreach ($fields[1] as $k => $block) {
            $fields = $block['fields'] ?? $block;
            $class = isset($block['expand']) ? 'expand' : '';
            $formMapper->with($k, ['class' => 'col-md-3 columnFields '.$class, 'label' => $k]);
            foreach ($fields as $field) {
                $this->addFormField($field, $formMapper);
            }

            $formMapper->end();
        }
    }

    public function getNewInstance(): object
    {
        $instance = parent::getNewInstance();
        $instance->setLocale($this->apps->get()->getDefaultLocale()); // todo : always use first app params
        //$instance->setMainContentType($this->apps->get()->getDefaultMainContentType());

        return $instance;
    }

    protected function configureDatagridFilters(DatagridMapper $formMapper): void
    {
        $formMapper->add('locale', null, ['label' => 'admin.page.locale.label']);

        if (\count($this->getApps()->getHosts()) > 1) {
            $formMapper->add('host', null, ['label' => 'admin.page.host.label']);
        }

        $formMapper->add('h1', null, ['label' => 'admin.page.h1.label']);

        $formMapper->add('mainContent', null, ['label' => 'admin.page.mainContent.label']);

        $formMapper->add('slug', null, ['label' => 'admin.page.slug.label']);

        $formMapper->add('title', null, ['label' => 'admin.page.title.label']);

        if ($this->exists('name')) {
            $formMapper->add('name', null, ['label' => 'admin.page.name.label']);
        }

        if ($this->exists('parentPage')) {
            $formMapper->add('parentPage', null, ['label' => 'admin.page.parentPage.label']);
        }

        if ($this->exists('metaRobots')) {
            $formMapper->add('metaRobots', null, [
                'choices' => [
                    'admin.page.metaRobots.choice.noIndex' => 'noindex',
                ],
                'label' => 'admin.page.metaRobots.label',
            ]);
        }
    }

    public function preUpdate(object $page): void
    {
        $page->setUpdatedAt(new \Datetime());
    }

    protected function configureListFields(ListMapper $listMapper): void
    {
        $listMapper->addIdentifier('h1', 'html', [
            'label' => 'admin.page.title.label',
            'template' => '@pwAdmin/page/page_list_titleField.html.twig',
        ]);
        $listMapper->add('updatedAt', null, [
            'format' => 'd/m à H:m',
            'label' => 'admin.page.updatedAt.label',
        ]);
        $listMapper->add('_action', null, [
            'actions' => [
                'show' => [],
                'delete' => [],
            ],
            'row_align' => 'right',
            'header_class' => 'text-right',
            'label' => 'admin.action',
        ]);
    }

    public function getObjectMetadata($page): MetadataInterface
    {
        $media = $page->getMainImage();
        if (null !== $media && false !== strpos($media->getMimeType(), 'image/')) {
            $thumb = $this->imageManager->getBrowserPath($media, 'thumb');
        } else {
            $thumb = self::$thumb;
        }

        return new Metadata(strip_tags($page->getName(true)), null, $thumb);
    }
}