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


class GeneralData extends Section implements Initializable
{

    /**
     * Class Posts
     *
     * @property \App\Model $model
     *
     * @see http://sleepingowladmin.ru/docs/model_configuration_section
     */
    protected $checkAccess = false;

    /**
     * @var string
     */
    protected $title = 'Общие данные';

    /**
     * @var string
     */
    protected $alias = 'general-data';

    /**
     * Initialize class.
     */
    public function initialize()
    {
        $this->addToNavigation()->setIcon('fa fa-globe');
    }


    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        //id title text
        return AdminDisplay::table()->setColumns([
            AdminColumn::link('id', 'ID'),
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
            AdminFormElement::textarea('banner', 'Баннер')->required(),
            AdminFormElement::text('email', 'Почта')->required(),
            AdminFormElement::text('tel', 'Телефон')->required(),
            AdminFormElement::text('address', 'Адрес')->required(),
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
