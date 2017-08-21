<?php

namespace App\Http\Controllers;

use App\Repositories\GeneralDataRepository;

class SiteController extends Controller{

    protected $generalDataRepository;

    public function __construct(GeneralDataRepository $generalDataRepository){
        $this->generalDataRepository=$generalDataRepository;
    }

    protected function getInfo($select='*'){

        return $this->generalDataRepository->get($select);
    }


}

