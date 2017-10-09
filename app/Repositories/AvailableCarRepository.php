<?php

namespace  App\Repositories;

use App\AvailableCar;

class AvailableCarRepository extends Repository{

    public function __construct(AvailableCar $aCar){
        $this->model=$aCar;
    }


    public function one($alias,$relation=false){

        $aCar=parent::one($alias,$relation);

        return $aCar;
    }
}