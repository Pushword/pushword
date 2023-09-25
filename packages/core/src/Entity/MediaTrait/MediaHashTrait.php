<?php

namespace Pushword\Core\Entity\MediaTrait;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;

trait MediaHashTrait
{
    /**
     * @var string|resource|null
     */
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BINARY, length: 20, options: ['default' => ''])]
    protected $hash;

    abstract public function getMediaFile(): ?File;

    abstract public function getStoreIn(): ?string;

    abstract public function getMedia(): ?string;

    public function getHash(): mixed
    {
        return $this->hash ?? $this->setHash()->getHash();
    }

    public function resetHash(): self
    {
        $this->hash = null;

        return $this;
    }

    public function setHash(string $hash = null): self
    {
        if (null !== $hash) {
            $this->hash = $hash;

            return $this;
        }

        if (($mediaFile = $this->getMediaFile()) !== null && file_exists((string) $mediaFile)) {
            $this->hash = \Safe\sha1_file($mediaFile->getPathname(), true);

            return $this;
        }

        $this->hash = \Safe\sha1_file($this->getStoreIn().'/'.$this->getMedia(), true);

        return $this;
    }
}
