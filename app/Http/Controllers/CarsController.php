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

    public function __construct(CarRepository $carRepository) {
        $this->carRepository = $carRepository;
    }

    public function getMarks() {

        $response['marks'] = $this->carRepository->getMarks();

        return response()->json($response);
    }

    public function getModels($mark) {

        $response['models'] = $this->carRepository->getModels($mark, true);

        return response()->json($response);
    }

    public function getYears($mark = false, $model = false)
    {

        $response['years'] = $this->carRepository->getYears($mark, $model);

        return response()->json($response);
    }

    public function getCars(Request $request)
    {


        $where = false;

        $whereIn = false;

        $driveSearch = array();

        $docType = array();

        $fuelList = array();

        $drive = $request->input('drive');
        $mark = $request->input('mark');
        $model = $request->input('model');
        $from = $request->input('from');
        $to = $request->input('to');
        $docAdd = $request->input('docAdd');
        $docRem = $request->input('docRem');


        if($docAdd){

            $docType = $docAdd;

            if($docRem){

                foreach ($docRem as $rem){

                    unset($docType[array_search($rem,$docType)]);
                }
            }

            foreach($docType as $doc){

                $where[] = ['doc_type', 'like', '%' .$doc. '%'];
            }



        }




        $drive_type = [

            0 => ['Front-wheel Drive'],

            1 => ['Rear-wheel Drive'],

            2 => ['All Wheel Drive', '4fd', '4rd', 'Four By Four', 'Front Whl Drv W/4x4', 'Rear Wheel Drv W/4x4 '],

        ];


        if ($drive) {

            $driveSearch[0] = 'drive';

            $driveSearch[1] = array();

            foreach ($drive as $type) {

                foreach ($drive_type[$type] as $item) {

                    array_push($driveSearch[1], $item);
                }
            }
        }

        $favoriteCars = json_decode($request->input('favoriteCars'));

        if ($favoriteCars) {

            $whereIn = ['lot_id', $favoriteCars];
        }

        $fuel = $request->input('fuel');




        if($fuel){

            $fuelList[0] = 'fuel';
            $fuelList[1] = $fuel;
        }




        if ($mark) {
            $where[] = ['name', 'like', '%' . $mark . '%'];
        }
        if ($model) {
            $where[] = ['name', 'like', '%' . $model . '%'];
        }
        if ($from) {
            $where[] = ['year', '>=', $from];
        }
        if ($to) {
            $where[] = ['year', '<=', $to];
        }


        $orderBy = array('col' => 'createdAt', 'sortDir' => 'desc');

        if ($to || $from) {
            $orderBy = [];
            $orderBy['col'] = 'year';
            $orderBy['sortDir'] = 'asc';
        }

        $cars = $this->carRepository
            ->get(['*'], false, config('settings.cars_on_page'), $where, $orderBy, $whereIn, $driveSearch,$fuelList);


        return view(env('THEME') . '.indexContent')->with('cars', $cars)->render();
    }

}
