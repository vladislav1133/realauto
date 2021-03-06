<?php

namespace Admin\Widgets;

use AdminTemplate;
use SleepingOwl\Admin\Widgets\Widget;

class NavigationUserBlock extends Widget
{

    public function __construct()
    {

    }

    /**
     * Get content as a string of HTML.
     *
     * @return string
     */
    public function toHtml()
    {


        return view('admin.widgets.navbar');
    }

    /**
     * @return string|array
     */
    public function template()
    {
        return AdminTemplate::getViewPath('_partials.header');
    }

    /**
     * @return string
     */
    public function block()
    {
        return 'navbar';
    }
}