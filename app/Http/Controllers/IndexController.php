<?php

namespace App\Http\Controllers;

use App\GeneralData;
use App\Mail\ContactUsMail;
use App\Repositories\CarRepository;
use App\Repositories\GeneralDataRepository;
use Illuminate\Http\Request;

use Mail;
use Validator;

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

    public function contactUs(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'tel' => 'required |max:25'
        ]);

        if ($validator->passes()) {

            Mail::to($this->indexInfo->email)->send(new ContactUsMail($request->tel, $request->email));

            return response()->json(['success'=>'true']);
        }
;;
        return response()->json(['error' => $validator->errors()->all()]);
    }

    protected function getCars(){
        $cars=$this->carRepository
            ->get(['name','year','odometer','engine_type','path_to_image'],false,config('settings.cars_on_page'));

        return $cars;
    }



}

