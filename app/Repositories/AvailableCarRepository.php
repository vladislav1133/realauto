<?php

namespace App\Repositories;

use App\AvailableCar;

class AvailableCarRepository extends Repository
{

    public function __construct(AvailableCar $aCar)
    {
        $this->model = $aCar;
    }

    public function getCars($select = '*', $pagination = false, $orderBy = false, array $where = [])
    {

        $builder = $this->model->select($select);

        if ($orderBy) {

            $builder->orderBy($orderBy[0], $orderBy[1]);
        }


        if ($where) {


            if (array_key_exists('where', $where)) {

                if (is_array($where['where']) && !empty($where['where'])) {

                    $builder->where($where['where']);
                }
            }

            if (array_key_exists('whereIn', $where)) {
                if (is_array($where['whereIn']) && !empty($where['whereIn'])) {

                    foreach ($where['whereIn'] as $whereIn) {

                        $builder->whereIn($whereIn[0], $whereIn[1]);
                    }
                }
            }


            if (array_key_exists('whereNotIn', $where)) {
                if (is_array($where['whereNotIn']) && !empty($where['whereNotIn'])) {

                    foreach ($where['whereNotIn'] as $whereInNot) {

                        $builder->whereNotIn($whereInNot[0], $whereInNot[1]);
                    }
                }
            }

            if (array_key_exists('whereNotNull', $where)) {
                if (is_array($where['whereNotNull']) && !empty($where['whereNotNull'])) {

                    foreach ($where['whereNotNull'] as $column) {

                        $builder->whereNotNull($column);
                    }
                }
            }

        }

        if ($pagination) {

            $collection = $builder->paginate($pagination);
        } else {

            $collection = $builder->get();
        }

        $language['drive'] = trans('cars.drive', [], 'ru');

          $collection->transform(function ($item, $key) use ($language) {

            $lang = [];

            if (array_key_exists(mb_strtoupper($item->drive), $language['drive'])) {

                $lang = ['drive' => $language['drive'][mb_strtoupper($item->drive)]];
            }

            $item['lang'] = $lang;

            return $item;
        });

        return $collection;
    }

    public function getSearchProperty()
    {


        $cars = $this->getCars('*');

        $property['marks'] = $this->getProperty($cars, 'mark');
        $property['years'] = $this->getProperty($cars, 'year');

        return $property;
    }

    public function getModels($mark)
    {

        $models = $this->model->where('mark', $mark)->pluck('model')->unique()->sort()->values()->toArray();

        return $models;
    }

    public function getProperty($collection, $col)
    {

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