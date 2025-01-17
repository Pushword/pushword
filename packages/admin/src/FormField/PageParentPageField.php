<?php

namespace Pushword\Admin\FormField;

use Doctrine\ORM\QueryBuilder;
use Pushword\Core\Entity\Page;
use Pushword\Core\Repository\PageRepository;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

/**
 * @extends AbstractField<Page>
 */
class PageParentPageField extends AbstractField
{
    /**
     * @param FormMapper<Page> $form
     */
    public function formField(FormMapper $form): void
    {
        /** @var Page */
        $page = $this->admin->getSubject();
        $form->add(
            'parentPage',
            EntityType::class,
            [
                'class' => $this->admin->getModelClass(),
                'label' => 'admin.page.parentPage.label',
                'required' => false,
                'query_builder' => fn (PageRepository $repo): QueryBuilder => $this->getQueryBuilder($repo, $page),
            ]
        );
    }

    public function getQueryBuilder(PageRepository $repo, Page $page): QueryBuilder
    {
        $qb = $repo->createQueryBuilder('p')
                ->andWhere('p.id != :id')
                ->setParameter('id', (int) $page->getId());

        if ('' !== $page->getHost()) { // HostField must be call before
            $qb->andWhere('p.host = :host')->setParameter('host', $page->getHost());
        }

        return $qb;
    }
}
