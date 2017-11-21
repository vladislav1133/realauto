<?php

namespace App\Repositories;

use App\Car;
use App\CarImg;
use Carbon\Carbon;
use Illuminate\Pagination\Paginator;

class CarRepository extends Repository
{

    public function __construct(Car $car)
    {
        $this->model = $car;
    }

    public function getGalleryImg($carId){

        $images = CarImg::select('*')->where('car_id',$carId)->first();



        if($images){
            $images = array_filter(explode(',',$images->imgs));
        }

        return $images;
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

    public function prepareSaleDate($cars)
    {


        $cars->transform(function ($item, $key) {

            if ($item->sale_date) {


                $item->sale_date = Carbon::createFromTimestamp($item->sale_date / 1000)->format('d/m/Y');

            }


            return $item;
        });

        return $cars;
    }

    public function get($select = '*', $pagination = false, $orderBy = false,  array $where = [])
    {

        $builder=$this->model->select($select);

        if ($orderBy) {

            $builder->orderBy($orderBy[0], $orderBy[1]);
        }

        $where['where'][] = ['active',1];

        if ($where) {

            if(array_key_exists('where', $where)){

                if(is_array($where['where']) && !empty($where['where'])){

                    $builder->where($where['where']);
                }
            }

            if(array_key_exists('whereIn', $where)){
                if (is_array($where['whereIn']) && !empty($where['whereIn'])) {

                    foreach ($where['whereIn'] as $whereIn) {

                        $builder->whereIn($whereIn[0], $whereIn[1]);
                    }
                }
            }


            if(array_key_exists('whereNotIn', $where)){
                if (is_array($where['whereNotIn']) && !empty($where['whereNotIn'])) {

                    foreach ($where['whereNotIn'] as $whereInNot) {

                        $builder->whereNotIn($whereInNot[0], $whereInNot[1]);
                    }
                }
            }

            if(array_key_exists('whereNotNull', $where)){
                if (is_array($where['whereNotNull']) && !empty($where['whereNotNull'])) {

                    foreach ($where['whereNotNull'] as $column) {

                        $builder->whereNotNull($column);
                    }
                }
            }

        }

        $collection = $builder->get();

        $filtered = $collection->filter(function ($item) {

            return $this->haveActualDate($item->sale_date);

        });


        $pagination = new Paginator($filtered,'10','1');

        dump($pagination);
        dump($pagination->links());


        dd();
        return $filtered;
    }


    public function haveActualDate($date){


        $date = $date/1000;

        $timeNow = Carbon::now()->getTimestamp();

        if($date > $timeNow) return true;
        return false;
    }

    public function getSearchProperty($source, $type, $mark = false, $model = false)
    {
        $where = [];
        $property = [];

        if($source === 'all') $source = false;
        $where['where'][] = ['source',$source];
        $where['where'][] = ['vehicle_type',$type];


        if($mark) {
            $where['where'][] = ['brand',$mark];
        }

        if($model) {


            $where['whereIn'][] = ['model', $model];
        }


        $cars = $this->get(['brand','model','year', 'drive', 'fuel', 'location', 'highlights', 'doc_type', 'primary_damage','sale_date'], '', '', $where);


        if (!$mark) {

            $property['marks'] = $this->getProperty($cars, 'brand');
        }

        if($mark && $model == false) {
            $property['models'] = $this->getProperty($cars,'model');
        }

        $property['years'] = $this->getProperty($cars,'year');
        $property['damage'] = $this->getProperty($cars,'primary_damage');

        $property['fuel'] = $this->getProperty($cars,'fuel');
        $property['highlights'] = $this->getProperty($cars,'highlights');

        $property['location'] = $this->getProperty($cars,'location');
        $property['doc_type'] = $this->getProperty($cars,'doc_type');

        $property['drive'] = $this->getProperty($cars,'drive');


        return $property;

    }

    public function getProperty($collection, $col) {

        $arr = $collection->pluck($col)->unique()->toArray();
        if (($key = array_search('NULL', $arr)) !== false) {
            unset($arr[$key]);
        }

        $arr = array_filter($arr);
        sort($arr);
        $arr = array_values($arr);

        return $arr;
    }

}