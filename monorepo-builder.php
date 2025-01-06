<?php

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\AddTagToChangelogReleaseWorker;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\PushNextDevReleaseWorker;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\PushTagReleaseWorker;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\SetCurrentMutualDependenciesReleaseWorker;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\SetNextMutualDependenciesReleaseWorker;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\TagVersionReleaseWorker;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\UpdateBranchAliasReleaseWorker;
use Symplify\MonorepoBuilder\Release\ReleaseWorker\UpdateReplaceReleaseWorker;
use Symplify\MonorepoBuilder\ComposerJsonManipulator\ValueObject\ComposerJsonSection;
use Symplify\MonorepoBuilder\Config\MBConfig;
use Symplify\MonorepoBuilder\ValueObject\Option;

return static function (MBConfig $mbConfig): void {
    $mbConfig->packageDirectories([
        __DIR__ . '/packages',
    ]);

};

// return static function (ContainerConfigurator $containerConfigurator): void {
//     $services = $containerConfigurator->services();

//     // release workers - in order to execute
//     $services->set(UpdateReplaceReleaseWorker::class);
//     $services->set(SetCurrentMutualDependenciesReleaseWorker::class);
//     $services->set(AddTagToChangelogReleaseWorker::class);
//     $services->set(TagVersionReleaseWorker::class);
//     $services->set(PushTagReleaseWorker::class);
//     $services->set(SetNextMutualDependenciesReleaseWorker::class);
//     $services->set(UpdateBranchAliasReleaseWorker::class);
//     $services->set(PushNextDevReleaseWorker::class);
// };
