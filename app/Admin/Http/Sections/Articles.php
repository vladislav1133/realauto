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


class Articles extends Section implements Initializable
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
    protected $title = 'Статьи';

    /**
     * @var string
     */
    protected $alias = 'articles';

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
            AdminColumn::text('title', 'Заголовок'),
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
            AdminFormElement::text('title', 'Заголовок')->required(),
            AdminFormElement::image('img', 'Изображение')->required(),
            AdminFormElement::wysiwyg('text', 'Text', 'ckeditor')->required(),
//            AdminFormElement::select('country_id')->setLabel('Страна')
//                ->setModelForOptions(\App\Model\Country::class)
//                ->setHtmlAttribute('placeholder', 'Выберите страну')
//                ->setDisplay('title')
//                ->required(),
//            AdminFormElement::dependentselect('contact_id', 'Контакт', ['country_id'])
//                ->setModelForOptions(\App\Model\Contact::class)
//                ->setHtmlAttribute('placeholder', 'Выберите контакт')
//                ->setDisplay('FullName')
//                ->setLoadOptionsQueryPreparer(function($item, $query) {
//                    return $query->where('country_id', $item->getDependValue('country_id'));
//                }),
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
