<?php

namespace App\Http\Controllers;

use App\Repositories\CarRepository;

class AjaxCarsController extends Controller
{
    protected $carRepository;

    public function __construct(CarRepository $carRepository){
        $this->carRepository=$carRepository;
    }

    public function ajaxMarks(){
        $response['marks']=$this->carRepository->getMarks();
        return response()->json($response);
    }

    public function ajaxModels($mark){
        $response['models']=$this->carRepository->getModels($mark);

        return response()->json($response);
    }

    public function ajaxYears($mark=false,$model=false){

        $response['years']=$this->carRepository->getYears($mark,$model);

        return response()->json($response);
    }

    public function ajaxCars($mark=false,$model=false,$year=false){

        $cars=$this->getCars($mark,$model,$year);

        return view(env('THEME').'.indexContent')->with('cars',$cars)->render();
    }

    protected function getCars($mark=false,$model=false,$year=false){
        $where=false;

        if($mark!=false){$where[]=['name','like','%'.$mark.'%'];}
        if($model!=false){$where[]=['name','like','%'.$model.'%'];}
        if($year!=false){$where[]=['name','like','%'.$year.'%'];}

        $cars=$this->carRepository
            ->get(['name','year','odometer','engine_type','path_to_image'],false,config('settings.cars_on_page'),$where);

        return $cars;
    }


}
