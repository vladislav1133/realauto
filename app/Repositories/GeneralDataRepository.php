<?php

namespace  App\Repositories;

use App\GeneralData;

class GeneralDataRepository extends Repository{

    public function __construct(GeneralData $generalData){
        $this->model=$generalData;
    }

    public function getInfo($select='*'){
        $info =  $builder=$this->model->select($select)->first();

        if($info)$info->tel=json_decode($info->tel);

        return $info;
    }
}