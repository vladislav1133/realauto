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

    public function scopeLast($query)
    {
        $query->orderBy('id', 'asc');
    }

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {

        return AdminDisplay::table()->setApply(function($query) {
            $query->orderBy('created_at', 'desc');
        })->setColumns([
            AdminColumn::link('id', 'ID'),
            AdminColumn::text('title', 'Заголовок')

        ])->paginate(15);

    }

    /**
     * @param int $id
     *
     * @return FormInterface
     */
    public function onEdit($id)
    {
        $form = AdminForm::panel()->addBody([
            AdminFormElement::text('title', 'Заголовок')->required(),
            AdminFormElement::textarea('review', 'Краткое описание')->required(),
            AdminFormElement::text('alias', 'Алиас')->required()->unique(),
            AdminFormElement::text('meta_title', 'Мета заголовок')->required(),
            AdminFormElement::textarea('meta_description', 'Мета описание')->required(),
            AdminFormElement::textarea('meta_keywords', 'Мета ключи')->required(),
            AdminFormElement::image('img', 'Изображение')->required(),
            AdminFormElement::wysiwyg('text', 'Text', 'ckeditor')->required(),
        ]);
        return $form;
    }

    /**
     * @return FormInterface
     */
    public function onCreate(){
        return $this->onEdit(null);
    }


}
