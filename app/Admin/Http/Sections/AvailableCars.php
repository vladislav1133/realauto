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


class AvailableCars extends Section implements Initializable
{
    /**
     * Class AvailableCars
     *
     * @property \App\AvailableCar $model
     *
     */

    protected $checkAccess = false;

    /**
     * @var string
     */
    protected $title = 'Машины в наличии';

    /**
     * @var string
     */
    protected $alias = 'available-cars';

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
            AdminColumn::text('id', 'ID'),
            AdminColumn::link('mark', 'Марка'),
            AdminColumn::text('model', 'Модель'),
            AdminColumn::text('price', 'цена'),

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
            AdminFormElement::select('active', 'Отображать',['1'=>'Отображать','0'=>'Скрыть'])->required(),
            AdminFormElement::text('meta_title', 'Мета-тег Title')->required(),
            AdminFormElement::textarea('meta_description', 'Мета-тег Description')->required()->setRows(2),
            AdminFormElement::textarea('meta_keywords', 'Мета-тег Keywords')->required()->setRows(2),
            AdminFormElement::text('mark', 'Марка')->required(),
            AdminFormElement::text('model', 'Модель')->required(),
            AdminFormElement::number('year', 'Год')->required(),
            AdminFormElement::number('price', 'Цена')->required(),
            AdminFormElement::text('engine_type', 'Двигатель')->required(),
            AdminFormElement::text('fuel', 'Топливо')->required(),
            AdminFormElement::select('transmission', 'КПП',['Automatic'=>'Automatic','Manual'=>'Manual'])->required(),
            AdminFormElement::text('odometer', 'Пробег')->required(),
            AdminFormElement::select('drive', 'Тип привода',['FRONT WHEEL DRIVE'=>'FRONT WHEEL DRIVE','ALL WHEEL DRIVE'=>'ALL WHEEL DRIVE','REAR WHEEL DRIVE'=>'REAR WHEEL DRIVE'])->required(),
            AdminFormElement::image('icon', 'Иконка для таблицы')->required()->setUploadPath(function(\Illuminate\Http\UploadedFile $file) {
                return 'images/available_cars';
            }),
            AdminFormElement::images('gallery', 'Галерея для слайдера')->required()->setUploadPath(function(\Illuminate\Http\UploadedFile $file) {
                return 'images/available_cars';
            })->storeAsComaSeparatedValue(),
            AdminFormElement::text('equipment', 'Комплектация(Компоненты разделяются знаком ;)'),


//
            AdminFormElement::wysiwyg('description', 'Описание', 'ckeditor')->required(),

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
