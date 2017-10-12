<?php

namespace App\Repositories;

use App\Car;
use Carbon\Carbon;

class CarRepository extends Repository {

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

    public function __construct(Car $car)
    {
        $this->model = $car;
    }

    public function getNames() {

        $query = Car::select('name')->get()->toArray();
        $names = array();

        foreach ($query as $i) {
            array_push($names, $i['name']);
        }

        return $names;
    }

    public function getMarks() {

        $names = $this->unique('name');

        $marks = array();

        foreach ($names as $name) {

            $name = substr($name, strpos($name, ' ') + 1, strlen($name));
            $marks[] = substr($name, 0, strpos($name, ' '));
        }

        $marks = array_unique($marks);

        sort($marks);

        return $marks;
    }


    public function getModels($mark, $firstName = false) {

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

        sort($models);

        return $models;
    }

    public function getYears() {

        $years = $this->unique('year','asc');

        return $years;
    }

    public function get($select='*',$pagination=false,$orderBy=false,$where=false,$whereIn=false,$whereNotIn = false,$distinct = false) {
        $query = parent::get($select, $pagination,$orderBy,$where,$whereIn,$whereNotIn,$distinct);

        return $query;
    }

    public function getCars($select='*',$pagination=false,$orderBy=false,$where=false,$whereIn=false,$whereNotIn=false,$distinct = false) {
        $cars = parent::get($select, $pagination,$orderBy,$where,$whereIn,$whereNotIn,$distinct);

        $cars = $this->prepareImg($cars);

        $cars = $this->prepareMarkAndModel($cars);

        $cars = $this->prepareOdometer($cars);

        $cars = $this->prepareDrive($cars);

        $cars = $this->prepareSaleDate($cars);


        return $cars;
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

                $item['mark'] = $mark;
                $item['model'] = $model;
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

        return $cars;
    }

    protected function prepareSaleDate($cars) {


        $cars->transform(function ($item, $key) {

            if ($item->sale_date) {

                $item->sale_date = Carbon::createFromTimestamp($item->sale_date/1000)->format('d/m/Y');
            }
            return $item;
        });

        return $cars;
    }

    public function search($query) {

        return $this->searchValidate($query);
    }

    public function searchValidate($query){


        if(preg_match('/^[a-zA-Z]{2}$/',$query)) return 'location';

        if (preg_match('/^[a-zA-Z0-9]{17}$/',$query)) return 'vin';

        if(preg_match('/^[0-9]{4}$/',$query)) if($query>=2012 and $query<=2018) return 'year';

        if(preg_match('/^[0-9]{8}$/',$query)) return 'lot';

        return false;
    }

    public function getSearchProperty ($mark,$model = false){

        $where = [];
        $where[] = ['name', 'like', '%' . $mark . '%'];

        if ($model) {
            $where[] = ['name', 'like', '%' . $model . '%'];
        }

        $cars = $this->get(['year','drive','fuel','location','highlights','doc_type','primary_damage'],'','',$where);

        $property = [];



        $property['years'] = array_filter(array_unique($cars->sortBy('year')->pluck('year')->toArray()));
        $property['damage'] = array_filter(array_unique($cars->sortBy('primary_damage')->pluck('primary_damage')->toArray()));
        $property['highlights'] = array_filter(array_unique($cars->sortBy('highlights')->pluck('highlights')->toArray()));
        $property['fuel'] = array_filter(array_unique($cars->sortBy('fuel')->pluck('fuel')->toArray()));


        $property['drive'] = [];

        $drives = array_filter(array_unique($cars->sortBy('drive')->pluck('drive')->toArray()));

        $driveType = config('car_search.drive_type');



           foreach ($driveType as $k=>$type){


              foreach ($type as $item){

                  if(in_array($item,$drives)){

                      array_push($property['drive'],$k);
                  }
              }
           }

        $property['location'] = array_filter(array_unique($cars->sortBy('location')->pluck('location')->toArray()));
        $property['doc_type'] = array_filter(array_unique($cars->sortBy('doc_type')->pluck('doc_type')->toArray()));

        return $property;

    }
}