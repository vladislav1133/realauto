<?php

namespace App\Http\Controllers;

use App\Repositories\CarRepository;

use Cookie;
use Illuminate\Http\Request;
use Response;
use Crypt;

class CarsController extends Controller
{
    protected $carRepository;

    public function __construct(CarRepository $carRepository){
        $this->carRepository=$carRepository;
    }

    public function getMarks(){
        $response['marks']=$this->carRepository->getMarks();
        return response()->json($response);
    }

    public function getModels($mark){
        $response['models']=$this->carRepository->getModels($mark);

        return response()->json($response);
    }

    public function getYears($mark=false,$model=false){

        $response['years'] = $this->carRepository->getYears($mark,$model);

        return response()->json($response);
    }

    public function getCars(Request $request){

        $where = false;

        $whereIn = false;

        $favoriteCars = json_decode($request->input('favoriteCars'));

        if($favoriteCars){

            $whereIn = ['lot_id', $favoriteCars];
        }

        $mark = $request->input('mark');
        $model = $request->input('model');
        $from = $request->input('from');
        $to = $request->input('to');


        if($mark){$where[]=['name','like','%'.$mark.'%'];}
        if($model){$where[]=['name','like','%'.$model.'%'];}
        if($from){$where[]=['year','>=',$from];}
        if($to){$where[]=['year','<=',$to];}

        $orderBy = array('col'=>'createdAt','sortDir'=>'desc');

        if($to||$from){
            $orderBy=[];
            $orderBy['col']='year';
            $orderBy['sortDir']='asc';
        }


        $cars=$this->carRepository
            ->get(['*'],false,config('settings.cars_on_page'),$where,$orderBy,$whereIn);


        return view(env('THEME').'.indexContent')->with('cars',$cars)->render();
    }

    public function addFavoriteCars(){

    }
    public function getFavoriteCars(){
//
//
//        $where=false;
//
//        $where[]=['name','like','%'.$mark.'%'];
//
//        $orderBy = array('col'=>'createdAt','sortDir'=>'desc');
//
//        if($to||$from){
//            $orderBy=[];
//            $orderBy['col']='year';
//            $orderBy['sortDir']='asc';
//        }
//
//
//        $cars=$this->carRepository
//            ->get(['*'],false,config('settings.cars_on_page'),$where,$orderBy);
//
//
//        return view(env('THEME').'.indexContent')->with('cars',$cars)->render();
//
//        $cars=['124','3434','6565'];
//
//        setcookie('cookie', json_encode($cars), time()+3600);
//        //$cookie = Cookie::forever('favoriteCars',json_encode($cars),'','');
//
//
//        //$response = Response::make('Hello World');
//
//        return 'qw';

        return '<tr>
                    <td><img src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX81/2f607a16-49dd-4650-88b2-9f257ebfc628.JPG" alt=""></td>
                    <td>1223545</td>
                    <td>2013</td>
                    <td>CHEVROLET</td>
                    <td>TRAX LS</td>
                    <td>1.4L4</td>
                    <td>GAS</td>
                    <td>14783 mi</td>
                    <td>передняя часть</td>
                    <td>Вторичные повреждения: незначительные выбоины/царапины</td>
                    <td>FL - TAMPA SOUTH</td>
                    <td>-</td>
                    <td>SDSDS</td>
                </tr>';
    }
}
