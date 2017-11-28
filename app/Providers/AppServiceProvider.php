<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

use DB;

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
