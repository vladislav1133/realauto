<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
class AppServiceProvider extends ServiceProvider
{

    /**
     * Список виджетов, которые необходимо подключить в шаблоны
     *
     * @var array
     */
    protected $widgets = [
        \Admin\Widgets\DashboardMap::class,
        \Admin\Widgets\NavigationUserBlock::class
    ];

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        // Регистрация виджетов в реестре
        /** @var WidgetsRegistryInterface $widgetsRegistry */
        $widgetsRegistry = $this->app[\SleepingOwl\Admin\Contracts\Widgets\WidgetsRegistryInterface::class];

        foreach ($this->widgets as $widget) {
            $widgetsRegistry->registerWidget($widget);
        }

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
