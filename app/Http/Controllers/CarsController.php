<?php

namespace App\Http\Controllers;

use App\Repositories\CarRepository;

use Cookie;
use Illuminate\Http\Request;
use Response;
use Crypt;

class CarsController extends Controller {
    protected $carRepository;

    public function __construct(CarRepository $carRepository)
    {
        $this->carRepository = $carRepository;
    }

    public function getMarks($type)
    {
        $marks = $this->carRepository->getMarks($type);

        $response['marks'] = $marks;

        return response()->json($response);
    }

    public function getModels($mark) {

        $models = $this->carRepository->getModels($mark,true);

        $response['models'] = $models;

        return response()->json($response);
    }

    public function getYears(){

        $response['years'] = $this->carRepository->getYears();

        return response()->json($response);
    }

    

    public function getDocs(Request $request)
    {
        $mark = $request->input('mark');

        $model = $request->input('model');

        $locAdd = $request->input('locAdd');
        $locRem = $request->input('locRem');

        $docs = [];
        $whereNotIn = [];
        $whereIn = [];
        $where = [];


        if ($mark) $where[] = ['name', 'like', '%' . $mark . '%'];
        if ($model) $where[] = ['name', 'like', '%' . $model . '%'];

        if ($locRem) array_push($whereNotIn, ['location', $locRem]);

        if ($locAdd){

            if($locRem){
                foreach ($locRem as $key=>$loc){

                    if(($key = array_search($loc, $locAdd)) !== false) {

                        unset($locAdd[$key]);
                    }
                }
            }

            if ($locAdd) array_push($whereIn, ['location', $locAdd]);
        }

        $queryArr = $this->carRepository->get(['doc_type'], '', ['doc_type', 'asc'], $where, $whereIn,$whereNotIn,true);

        foreach ($queryArr as $arr) {

            array_push($docs, $arr['doc_type']);
        }

        $response['docType'] = $docs;


        return response()->json($response);
    }

    public function getCars(Request $request)
    {

        $where = false;

        $whereIn = [];

        $whereNotIn = [];

        $whereNotNull = [];

        $driveSearch = [];

        $drive_type = config('car_search.drive_type');

        $drive = $request->drive;
        $mark = $request->mark;
        $model = $request->model;
        $yearFrom = $request->yearFrom;
        $yearTo = $request->yearTo;
        $docAdd = $request->docAdd;
        $docRem = $request->docRem;
        $highlight = $request->highlight;
        $fuel = $request->fuel;
        $locAdd = $request->locAdd;
        $locRem = $request->locRem;
        $favoriteCars = $request->favoriteCars;
        $lot = $request->lot;
        $vin = $request->vin;
        $buyNow = $request->buyNow;
        $damage = $request->damage;
        $type = $request->type;


        if($buyNow !== null) {
            $where[] = ['buy_it_now', '!=',''];
        }



        if ($mark) $where[] = ['name', 'like', '%' . $mark . '%'];
        if ($model) $where[] = ['name', 'like', '%' . $model . '%'];



        if ($yearFrom) {
            $where[] = ['year', '>=', $yearFrom];
        }

        if ($yearTo) {
            $where[] = ['year', '<=', $yearTo];
        }

        if ($damage) array_push($whereIn, ['primary_damage', $damage]);

        if ($drive) {

            $driveSearch[0] = 'drive';

            $driveSearch[1] = array();

            foreach ($drive as $type) {

                foreach ($drive_type[$type] as $item) {

                    array_push($driveSearch[1], $item);
                }
            }

            $whereIn[] = $driveSearch;
        }

        if ($fuel) array_push($whereIn, ['fuel', $fuel]);

        if ($docRem) array_push($whereNotIn, ['doc_type', $docRem]);

        if ($docAdd){

            if($docRem){
                foreach ($docRem as $key=>$doc){

                    if(($key = array_search($doc, $docAdd)) !== false) {

                        unset($docAdd[$key]);
                    }
                }
            }

            if ($docAdd) array_push($whereIn, ['doc_type', $docAdd]);
        }

        if ($locRem) array_push($whereNotIn, ['location', $locRem]);

        if ($locAdd){

            if($locRem){
                foreach ($locRem as $loc){

                    if(($key = array_search($loc, $locAdd)) !== false) {

                        unset($locAdd[$key]);
                    }
                }
            }

            if ($locAdd) array_push($whereIn, ['location', $locAdd]);
        }

        if ($highlight) {

            $key = array_search('RUN AND DRIVE',$highlight);
            if($key !== false) $highlight[$key] = 'RUNS AND DRIVES';

            array_push($whereIn, ['highlights', $highlight]);
        }

        if ($favoriteCars) array_push($whereIn, ['lot_id', $favoriteCars]);

        if($lot) {
            $where[] = ['lot_id', '=', $lot];
        }

        if($vin) {
            $where[] = ['vin', '=', $vin];
        }

        $orderBy = ['sale_date', 'asc'];

        if ($yearTo || $yearFrom) {

            $orderBy = [];
            $orderBy[0] = 'year';
            $orderBy[1] = 'asc';
        }


        $cars = $this->carRepository->getCars(['*'], config('settings.cars_on_page'), $orderBy, $where, $whereIn, $whereNotIn, '',$whereNotNull,$type);

        $carsCount = $cars->total();


        $carsTable = view(env('THEME') . '.indexContent')->with('cars', $cars)->render();

        return ['table' => $carsTable, 'carsCount' => $carsCount];
    }

    public function search($query) {

        $query = $this->carRepository->search($query);

        $res = [];

        if($query){

            $res['found'] = true;
            $res['col'] = $query;
        } else {

            $res['found'] = false;
        }

        return response()->json($res);
    }

    public function getSearchProperty($type = 'car', $mark = false, $model = false){

        $property = $this->carRepository->getSearchProperty($type, $mark, $model);

        return response()->json($property);
    }

    public function getDefaultSearchProperty() {

        $property = $this->carRepository->getDefaultSearchProperty();

        return $property;
    }

    public function removeFavorite(Request $request) {

        $favoriteCars = $request->favoriteCars;

        $favoriteCars = json_decode($favoriteCars);

        if(!is_array($favoriteCars))  return response()->json(['success' => false, 'message' => 'invalid data']);

        $lots = $this->carRepository->pluck('lot_id')->toArray();

        $favoriteCars = array_intersect($favoriteCars, $lots);

        return response()->json(['success' => true, 'favoriteCars' => $favoriteCars ]);
    }


}
