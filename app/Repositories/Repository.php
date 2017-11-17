<?php

namespace App\Repositories;


abstract class Repository
{

    protected $model = false;

    public function pluck($col)
    {

        return $this->model->pluck($col);
    }

    public function findByField($field, $value, $columns = ['*']){

        return $this->model->select($columns)->where($field,$value)->first();
    }

    public function paginate($perPage = 0, $columns = array('*'))
    {
        return $this->model->paginate($perPage, $columns);
    }

    public function all($columns = array('*'))
    {
        return $this->model->select($columns)->get();
    }

    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    public function find($id, $columns = array('*'))
    {
        return $this->model->findOrFail($id, $columns);
    }

    public function updateWithIdAndInput($id, array $input)
    {
        $faq = $this->model->find($id);
        return $faq->update($input);
    }

    public function destroy($id)
    {
        return $this->model->destroy($id);
    }
}