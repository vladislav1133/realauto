<?php

namespace  App\Repositories;

use App\Car;

class CarRepository extends Repository{

    public function __construct(Car $car){
        $this->model=$car;
    }


    public function getNames(){
        $query=Car::select('name')->get()->toArray();
        $names=array();

        foreach ($query as $i){
            array_push($names,$i['name']);
        }

        return $names;
    }

    public function getMarks(){

        $names=$this->getNames();
        $marks=array();

        foreach($names as $name){

            $name=substr($name,strpos($name,' ')+1,strlen($name));
            $marks[]=substr($name,0,strpos($name,' '));
        }

        $marks=array_unique($marks);


        return $marks;
    }

    public function getModels($mark){

        $names=$this->getNames();

        $models=array();
        $modelsWithKeys=array();

        foreach($names as $name){
            if(preg_match('/'.$mark.'/',$name)){
                $name=substr($name,strpos($name,' ')+1,strlen($name));
                $model=substr($name,strpos($name,' ')+1,strlen($name));
                array_push($modelsWithKeys,$model);
            }

        }

        $modelsWithKeys=array_unique($modelsWithKeys);

        foreach ($modelsWithKeys as $i){
            array_push($models,$i);
        }
        return $models;
    }

    public function getYears($mark=false,$model=false){

        $names=$this->getNames();
        $years=array();

        if($mark==false)$mark='';
        if($model==false)$model='';

            foreach($names as $name){
                if(preg_match('/'.$mark.'/',$name)&&preg_match('/'.$model.'/',$name)){
                    $year=substr($name,0,strpos($name,' ')+1);
                    array_push($years,$year);
                }
            }

            $years=array_unique($years);
            sort($years);

            return $years;
    }

    public function get($select='*',$take=false,$pagination=false,$where=false,$orderBy=false){
        $cars=parent::get($select,$take,$pagination,$where,$orderBy);

        $cars=$this->prepareImg($cars);

        $cars=$this->prepareMarkAndModel($cars);

        $cars=$this->prepareOdometer($cars);

        $cars=$this->prepareTransmission($cars);

        return $cars;
    }

    public function one($alias,$relation=false){

        $car=parent::one($alias,$relation);
    }

    protected function prepareImg($cars){
        $cars->transform(function ($item,$key){
            if(is_string($item->path_to_image)) {
                $first='https://cs.copart.com/v1/';
                $item->path_to_image=substr($item->path_to_image,28,strlen($item->path_to_image));
                $item->path_to_image=$first.$item->path_to_image;
                $pix=substr($item->path_to_image,43,5);
                $item->path_to_image=str_replace($pix,'/'.$pix.'/',$item->path_to_image);
            }
            return $item;
        });

        return $cars;
    }

    protected function prepareMarkAndModel($cars){
        $cars->transform(function ($item,$key){
            if(is_string($item->name)) {
                $item->name=substr($item->name,strpos($item->name,' ')+1,strlen($item->name));
                $mark=substr($item->name,0,strpos($item->name,' '));
                $model=substr($item->name,strpos($item->name,' ')+1,strlen($item->name));
                $arr['mark']=$mark;
                $arr['model']=$model;
                $arr=json_encode($arr);
                $item->name_delay=json_decode($arr);
            }
            return $item;
        });

        return $cars;
    }

    protected function prepareOdometer($cars){

        $cars->transform(function ($item,$key){
            if(is_string($item->odometer)) {
               $item->odometer=substr($item->odometer,0,strpos($item->odometer,'mi')+2);
            }
            return $item;
        });

        return $cars;
    }

    protected function prepareTransmission($cars){

        $cars->transform(function ($item,$key){
            if($item->transmission==''){$item->transmission='&mdash;';}
           // if($item->transmission=='Automatic'){$item->transmission='Автомат';}
           // if($item->transmission=='Manual'){$item->transmission='Механическая';}

            return $item;
        });

        return $cars;
    }
}