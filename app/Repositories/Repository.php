<?php

namespace App\Repositories;

use App\Page;

abstract class Repository
{

    protected $model = false;

    public function get($select = '*', $pagination = false, $orderBy = false, $where = false, $whereIn = false, $whereNotIn = false, $distinct = false, $whereNotNull = false)
    {

        if ($distinct) {

            $builder = $this->model->distinct()->select($select);
        } else {

            $builder = $this->model->select($select);
        }


        if ($orderBy) {

            $builder->orderBy($orderBy[0], $orderBy[1]);
        }

        if ($where) {

            $builder->where($where);
        }

        if ($whereIn) {

            foreach ($whereIn as $item) {

                $builder->whereIn($item[0], $item[1]);
            }
        }

        if($whereNotNull){

            foreach($whereNotNull as $item){

                $builder->whereNotNull($item);
            }
        }

        if ($whereNotIn) {

            foreach ($whereNotIn as $item) {

                $builder->whereNotIn($item[0], $item[1]);
            }
        }

        if ($pagination) {

            return $builder->paginate($pagination);
        }

        return $builder->get();
    }


    protected function one($alias, $relation = false)
    {

        $result = $this->model->where('alias', $alias)->first();

        return $result;
    }

    public function unique($select, $sortType = 'asc')
    {
        $builder = $this->model->distinct()->select($select)->orderBy($select, $sortType);

        $uniqueArray = $builder->get()->toArray();

        $response = array();

        foreach ($uniqueArray as $arr) {

            array_push($response, $arr[$select]);
        }
        return $response;
    }

    public function uniqueArray($col,$sortType = 'asc') {

        $query = $this->model->distinct()->select($col)->orderBy($col, $sortType)
            ->get()->toArray();

        $array = array_pluck($query, $col);

        $array = array_filter($array);

        return $array;
    }

    public function getMeta($page)
    {

        $meta = Page::select('meta_title', 'meta_description', 'meta_keywords')->where('name', $page)->first();
        return $meta;
    }

    public function pluck($col) {

        return $this->model->pluck($col);
    }
}