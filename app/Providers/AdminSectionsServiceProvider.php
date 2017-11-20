<?php

namespace App\Providers;

use SleepingOwl\Admin\Providers\AdminSectionsServiceProvider as ServiceProvider;

use Illuminate\Routing\Router;
use SleepingOwl\Admin\Contracts\Navigation\NavigationInterface;
use SleepingOwl\Admin\Contracts\Template\MetaInterface;
use SleepingOwl\Admin\Contracts\Widgets\WidgetsRegistryInterface;


class AdminSectionsServiceProvider extends ServiceProvider
{
    protected $widgets = [
        \Admin\Widgets\DashboardMap::class,
        \Admin\Widgets\NavigationUserBlock::class
    ];
    /**
     * @var array
     */
    protected $sections = [
        \App\Article::class => 'App\Http\Sections\Articles',
        \App\Page::class => 'App\Http\Sections\Pages',
    ];



    /**
     * Register sections.
     *
     * @return void
     */
    public function boot(\SleepingOwl\Admin\Admin $admin)
    {

        $this->app->call([$this, 'registerViews']);
        parent::boot($admin);
    }

    /**
     * @param WidgetsRegistryInterface $widgetsRegistry
     */
    public function registerViews(WidgetsRegistryInterface $widgetsRegistry)
    {
        foreach ($this->widgets as $widget) {
            $widgetsRegistry->registerWidget($widget);
        }
    }
}
