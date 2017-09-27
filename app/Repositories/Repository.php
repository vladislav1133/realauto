<?php

namespace App\Repositories;
use App\Page;

abstract class Repository {

    protected $model=false;

    public function get($select='*',$take=false,$pagination=false,$where=false,$orderBy=false,$whereIn=false,$drive=false,$docList=false,$fuelList=false){

        $builder=$this->model->select($select);

        if($take) {

            $builder->take($take);
        }

        if($where){

            $builder->where($where);
        }

        if($whereIn){

            $builder->whereIn($whereIn[0],$whereIn[1]);
        }

        if($drive){

            $builder->whereIn($drive[0],$drive[1]);
        }

        if($docList){
            $builder->whereIn($docList[0],$docList[1]);
        }

        if($fuelList){
            $builder->whereIn($fuelList[0],$fuelList[1]);
        }

        if($orderBy){

            $builder->orderBy($orderBy['col'], $orderBy['sortDir']);
        }

        if($pagination){

            return $builder->paginate($pagination);
        }



        return $builder->get();
    }


    protected function one($alias,$relation=false){
        $result=$this->model->where('alias',$alias)->first();

        return $result;
    }

    public function getMeta($page){

        $meta = Page::select('meta_title','meta_description','meta_keywords')->where('name',$page)->first();
        return $meta;
    }
}