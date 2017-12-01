<?php

namespace App\Http\Controllers\Api;

use App\Repositories\CarRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

    public function getModels($type, $mark) {

        $models = $this->carRepository->getModels($type, $mark,true);

        $response['models'] = $models;

        return response()->json($response);
    }

    public function getYears(){

        $response['years'] = $this->carRepository->getYears();

        return response()->json($response);
    }

    public function getDocs(Request $request)
    {
        $type = $request->type;
        $mark = $request->mark;
        $model = $request->model;

        $locAdd = $request->locAdd;
        $locRem = $request->locRem;

        $docs = [];
        $whereNotIn = [];
        $whereIn = [];
        $where = [];


        if ($mark === 'all') $mark = false;
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

        $queryArr = $this->carRepository->get(['doc_type'], '', ['doc_type', 'asc'], $where, $whereIn,$whereNotIn,true,'',$type);

        foreach ($queryArr as $arr) {

            array_push($docs, $arr['doc_type']);
        }

        $response['docType'] = $docs;


        return response()->json($response);
    }

    public function getCars(Request $request)
    {

        $where = [];

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
        $source = $request->source;


        //check it
        if($buyNow !== null) {
            $where['where'][] = ['buy_it_now','!=',''];
            $where['where'][] = ['buy_it_now','!=','NULL'];
            $where['whereNotNull'][] = 'buy_it_now';
        }

        if($source === 'all') $source = false;
        if ($source) $where['where'][] = ['source',$source];

        if ($type) $where['where'][] = ['vehicle_type',$type];


        if($mark === 'all') $mark = false;
        if ($mark) $where['where'][] = ['brand',$mark];

        if ($model) $where['whereIn'][] = ['model',$model];


        if ($yearFrom) {
            $where['where'][] = ['year', '>=', $yearFrom];
        }

        if ($yearTo) {
            $where['where'][] = ['year', '<=', $yearTo];
        }

        if ($damage) $where['whereIn'][] = ['primary_damage', $damage];

        if($drive) $where['whereIn'][] = ['drive',$drive];

        if ($fuel) $where['whereIn'][] = ['fuel', $fuel];

        if ($docRem)  $where['whereNotIn'][] = ['doc_type', $docRem];

        if ($docAdd){

            if($docRem){
                foreach ($docRem as $key=>$doc){

                    if(($key = array_search($doc, $docAdd)) !== false) {

                        unset($docAdd[$key]);
                    }
                }
            }

            if ($docAdd) $where['whereIn'][] = ['doc_type', $docAdd];
        }

        if ($locRem)  $where['whereNotIn'][] = ['location', $locRem];

        if ($locAdd){

            if($locRem){
                foreach ($locRem as $loc){

                    if(($key = array_search($loc, $locAdd)) !== false) {

                        unset($locAdd[$key]);
                    }
                }
            }

            if ($locAdd)$where['whereIn'][] = ['location', $locAdd];
        }

        if ($highlight) {

            $where['whereIn'][] = ['highlights', $highlight];
        }

        if ($favoriteCars) $where['whereIn'][] = ['lot_id', $favoriteCars];

        if($lot) {
            $where['where'][] = ['lot_id', '=', $lot];
        }

        if($vin) {
            $where['where'][] = ['vin', '=', $vin];
        }

        $orderBy = ['sale_date', 'asc'];

        $cars = $this->carRepository->get(['*'], config('settings.cars_on_page'), $orderBy, $where);

        $carsCount = $cars->total();

        $language['damage'] = trans('cars.damage');
        $language['highlights'] = trans('cars.highlights');
        $language['drive'] = trans('cars.drive');

        $carsTable = view(env('THEME') . '.indexContent')->with('cars', $cars)->with('language',$language)->render();

        
        return ['cars' => $cars, 'carsCount' => $carsCount];
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




}
