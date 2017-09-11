<?php

namespace  App\Repositories;

use App\AvailableCar;

class AvailableCarRepository extends Repository{

    public function __construct(AvailableCar $aCar){
        $this->model=$aCar;
    }

    public function get($select='*',$take=false,$pagination=false,$where=false,$orderBy=false){
        $aCar=parent::get($select,$take,$pagination,$where,$orderBy);

        return $aCar;
    }

    public function one($alias,$relation=false){

        $aCar=parent::one($alias,$relation);

        return $aCar;
    }
}