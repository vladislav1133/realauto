<?php

namespace App\Http\Controllers;

use App\Repositories\CarRepository;

class IndexController extends Controller{

    protected $carRepository;

    public function __construct(CarRepository $carRepository){
        $this->carRepository=$carRepository;
    }

    public function index(){

       $cars=$this->getCars();

       $carMarks=$this->carRepository->getMarks();

       $carYears=$this->carRepository->getYears();

        return view(env('THEME').'.index')->with('cars',$cars)->with('carMarks',$carMarks)->with('carYears',$carYears);
    }

    protected function getCars(){
        $cars=$this->carRepository
            ->get(['name','year','odometer','engine_type','path_to_image'],false,config('settings.car_on_page'));

        return $cars;
    }



}

