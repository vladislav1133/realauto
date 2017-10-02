<?php

namespace App\Repositories;
use App\Page;

abstract class Repository {

    protected $model=false;

    public function get($select='*',$take=false,$pagination=false,$where=false,$orderBy=false,$whereIn=false,$drive=false){

        $builder=$this->model->select($select);

        if($take) {

            $builder->take($take);
        }

        if($where){

            $builder->where($where);
        }

        if($whereIn){

            foreach ($whereIn as $item) {

                $builder->whereIn($item[0], $item[1]);
            }


        }

        if($drive){

            $builder->whereIn($drive[0],$drive[1]);
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

    public function unique($select,$sortType = 'asc'){

        $builder=$this->model->distinct()->select($select)->orderBy($select,$sortType);

        $uniqueArray = $builder->get()->toArray();

        $response = array();

        foreach ($uniqueArray as $arr){

            array_push($response,$arr[$select]);
        }
        return  $response;
    }

    public function getMeta($page){

        $meta = Page::select('meta_title','meta_description','meta_keywords')->where('name',$page)->first();
        return $meta;
    }
}