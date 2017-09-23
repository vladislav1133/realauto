<?php

namespace App\Repositories;

use App\Car;

class CarRepository extends Repository
{

    private $car_dmg = [
        'ALL OVER ' => 'повсеместные повреждения',
        'BURN - ENGINE' => 'пожар — двигатель',
        'BURN' => 'пожар',
        'DAMAGE HISTORY' => 'история повреждений',
        'FRONT END' => 'передняя часть',
        'MECHANICAL' => 'механические повреждения',
        'NORMAL WEAR' => 'естественный износ',
        'REJECTED REPAIR' => 'в ремонте было отказано',
        'REAR END' => 'задняя часть',
        'STRIPPED' => 'снята обшивка',
        'UNKNOWN' => 'неизвестно',
        'MISSING/ALTERED VIN' => 'отсутствующий / измененный VIN',
        'REPLACED VIN' => 'замененный VIN',
        'BIOHAZARDOUS/CHEMICAL' => 'биологическая / химическая опасность',
        'BURN - INTERIOR' => 'пожар — салон',
        'CASH FOR CLUNKERS' => 'наличные за старые автомобили',
        'FRAME DAMAGE REPORTED' => 'заявленное повреждение корпуса',
        'HAIL' => 'град',
        'MINOR DENT/SCRATCHES' => 'незначительные выбоины/царапины',
        'PARTIAL/INCOMPLETE REPAIR' => 'частичный / неполный ремонт',
        'ROLLOVER' => 'незначительные выбоины / царапины',
        'SIDE' => 'боковая часть',
        'TOP/ROOF' => 'верхняя часть / крыша',
        'UNDERCARRIAGE' => 'ходовая часть',
        'VANDALISM ' => 'вандализм',
        'WATER/FLOOD ' => 'затопление / наводнение',
    ];

    private $drive_type = [
        'Front-wheel Drive' => 'Передний привод',
        'All wheel drive' => 'Полный привод',
        'Rear-wheel drive' => 'Задний привод',
    ];

    public function __construct(Car $car)
    {
        $this->model = $car;
    }

    public function getNames()
    {

        $query = Car::select('name')->get()->toArray();
        $names = array();

        foreach ($query as $i) {
            array_push($names, $i['name']);
        }

        return $names;
    }

    public function getMarks()
    {

        $names = $this->getNames();
        $marks = array();

        foreach ($names as $name) {

            $name = substr($name, strpos($name, ' ') + 1, strlen($name));
            $marks[] = substr($name, 0, strpos($name, ' '));
        }

        $marks = array_unique($marks);


        return $marks;
    }

    public function getModels($mark, $firstName = false)
    {

        $names = $this->getNames();

        $models = array();
        $modelsWithKeys = array();

        foreach ($names as $name) {

            if (preg_match('/' . $mark . '/', $name)) {

                $name = substr($name, strpos($name, ' ') + 1, strlen($name));
                $model = substr($name, strpos($name, ' ') + 1, strlen($name));

                array_push($modelsWithKeys, $model);
            }

        }

        $modelsWithKeys = array_unique($modelsWithKeys);

        foreach ($modelsWithKeys as $i) {
            array_push($models, $i);
        }

        if ($firstName) {

            $filterArray = $models;

            foreach ($filterArray as &$model) {

                $model = preg_split('#[ /]#', $model);
                $model = $model[0];
            }

            $filterArray = array_unique($filterArray);

            $models = [];

            foreach ($filterArray as $item) {

                array_push($models, $item);
            }
        }

        return $models;
    }

    public function getYears($mark = false, $model = false)
    {

        $names = $this->getNames();
        $years = array();

        if ($mark == false) $mark = '';
        if ($model == false) $model = '';

        foreach ($names as $name) {
            if (preg_match('/' . $mark . '/', $name) && preg_match('/' . $model . '/', $name)) {
                $year = substr($name, 0, strpos($name, ' ') + 1);
                array_push($years, $year);
            }
        }

        $years = array_unique($years);
        sort($years);

        return $years;
    }

    public function get($select = '*', $take = false, $pagination = false, $where = false, $orderBy = false, $whereIn = false)
    {
        $cars = parent::get($select, $take, $pagination, $where, $orderBy, $whereIn);

        $cars = $this->prepareImg($cars);

        $cars = $this->prepareMarkAndModel($cars);

        $cars = $this->prepareOdometer($cars);

        $cars = $this->prepareTransmission($cars);

        $cars = $this->prepareDamage($cars);

        $cars = $this->prepareDrive($cars);

        return $cars;
    }

    public function one($alias, $relation = false)
    {

        $car = parent::one($alias, $relation);
    }

    protected function prepareImg($cars)
    {
        $cars->transform(function ($item, $key) {
            if (is_string($item->path_to_image)) {
                $first = 'https://cs.copart.com/v1/';
                $item->path_to_image = substr($item->path_to_image, 28, strlen($item->path_to_image));
                $item->path_to_image = $first . $item->path_to_image;
                $pix = substr($item->path_to_image, 43, 5);
                $item->path_to_image = str_replace($pix, '/' . $pix . '/', $item->path_to_image);
            }
            return $item;
        });

        return $cars;
    }

    protected function prepareMarkAndModel($cars)
    {
        $cars->transform(function ($item, $key) {
            if (is_string($item->name)) {
                $item->name = substr($item->name, strpos($item->name, ' ') + 1, strlen($item->name));
                $mark = substr($item->name, 0, strpos($item->name, ' '));
                $model = substr($item->name, strpos($item->name, ' ') + 1, strlen($item->name));
                $arr['mark'] = $mark;
                $arr['model'] = $model;
                $arr = json_encode($arr);
                $item->name_delay = json_decode($arr);
            }
            return $item;
        });

        return $cars;
    }

    protected function prepareOdometer($cars)
    {

        $cars->transform(function ($item, $key) {
            if (is_string($item->odometer)) {
                $item->odometer = substr($item->odometer, 0, strpos($item->odometer, 'mi') + 2);
            }
            return $item;
        });

        return $cars;
    }

    protected function prepareTransmission($cars)
    {

        $cars->transform(function ($item, $key) {
            if ($item->transmission == 'Automatic') {
                $item->transmission = 'Автомат';
            }
            if ($item->transmission == 'Manual') {
                $item->transmission = 'Механика';
            }

            return $item;
        });

        return $cars;
    }

    protected function prepareDamage($cars)
    {

        $cars->transform(function ($item, $key) {
            if ($item->primary_damage) {

                foreach ($this->car_dmg as $k => $val) {

                    $item->primary_damage = str_replace($k, $val, $item->primary_damage);
                }


            }
            return $item;
        });

        $cars->transform(function ($item, $key) {
            if ($item->secondary_damage) {

                foreach ($this->car_dmg as $k => $val) {
                    $item->secondary_damage = str_replace($k, $val, $item->secondary_damage);
                }

            }
            return $item;
        });

        return $cars;

    }

    protected function prepareDrive($cars){

        $cars->transform(function ($item, $key) {

            if ($item->drive) {

                foreach ($this->drive_type as $k => $val) {

                    $item->drive = str_replace($k, $val, $item->drive);
                }
            }
            return $item;
        });

        return $cars;
    }

}