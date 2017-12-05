<?php

namespace App\Http\Sections;

use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;

use SleepingOwl\Admin\Contracts\Form\FormInterface;
use SleepingOwl\Admin\Contracts\Display\DisplayInterface;

use SleepingOwl\Admin\Section;
use SleepingOwl\Admin\Contracts\Initializable;


class Pages extends Section implements Initializable
{

    /**
     * Class Pages
     *
     * @property \App\Page $model
     *
     */
    protected $checkAccess = false;

    /**
     * @var string
     */
    protected $title = 'Страницы';

    /**
     * @var string
     */
    protected $alias = 'pages';

    /**
     * Initialize class.
     */
    public function initialize()
    {
        $this->addToNavigation()->setIcon('fa fa-sitemap');
    }


    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        //id title text
        return AdminDisplay::table()->setColumns([
            AdminColumn::link('id', 'ID'),
            AdminColumn::text('name', 'Имя страницы'),
        ])->paginate(15);
    }

    /**
     * @param int $id
     *
     * @return FormInterface
     */
    public function onEdit($id)
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('meta_title', 'Title')->required(),
            AdminFormElement::textarea('meta_description', 'Description')->required(),
            AdminFormElement::text('meta_keywords', 'Keywords')->required(),
        ]);
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        return $this->onEdit(null);
    }
}
