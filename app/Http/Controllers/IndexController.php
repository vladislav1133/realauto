<?php

namespace App\Http\Controllers;

use App\GeneralData;
use App\Repositories\CarRepository;
use App\Repositories\GeneralDataRepository;

class IndexController extends SiteController{

    protected $carRepository;

    public function __construct(CarRepository $carRepository,GeneralDataRepository $generalDataRepository){
        parent::__construct(new GeneralDataRepository(new GeneralData()));
        $this->carRepository=$carRepository;

        $this->indexInfo = $this->generalDataRepository->getInfo('*');
    }

    public function index(){

        $meta = $this->carRepository->getMeta('index');
        //$meta=null;
        //dd($this->indexInfo);
        $cars=$this->getCars();

        $carMarks=$this->carRepository->getMarks();

        $carYears=$this->carRepository->getYears();

        return view(env('THEME').'.index')
            ->with('cars',$cars)
            ->with('carMarks',$carMarks)
            ->with('carYears',$carYears)
            ->with('info',$this->indexInfo)
            ->with('meta',$meta)->render();
    }

    protected function getCars(){
        $cars=$this->carRepository
            ->get(['name','year','odometer','engine_type','path_to_image'],false,config('settings.cars_on_page'));

        return $cars;
    }



}

