<?php

namespace App\Repositories;

abstract class Repository {

    protected $model=false;

    public function get($select='*',$take=false,$pagination=false,$where=false,$orderBy=false){

        $builder=$this->model->select($select);

        if($take) {
            $builder->take($take);
        }

        if($where){
            $builder->where($where);
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


}