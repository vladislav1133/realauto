<?php

namespace App\Http\Controllers;

use App\Repositories\CarRepository;

use Illuminate\Http\Request;


class CarsController extends Controller {
    protected $carRepository;

    public function __construct(CarRepository $carRepository)
    {
        $this->carRepository = $carRepository;
    }

    public function getCars(Request $request)
    {

        $where = [];

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

        if ($drive) {

            $driveSearch[0] = 'drive';

            $driveSearch[1] = array();

            foreach ($drive as $driveType) {

                foreach ($drive_type[$driveType] as $item) {

                    array_push($driveSearch[1], $item);
                }
            }

            $where['whereIn'][] = $driveSearch;
        }

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

        return ['table' => $carsTable, 'carsCount' => $carsCount];
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
        $source = $request->source;
        $type = $request->type;
        $mark = $request->mark;
        $model = $request->model;

        $locAdd = $request->locAdd;
        $locRem = $request->locRem;

        $where = [];

        if ($source === 'all') $source = false;
        if ($source) $where['where'][] = ['source', $source];

        if ($type) $where['where'][] = ['vehicle_type', $type];

        if ($mark === 'all') $mark = false;
        if ($mark) $where['where'][] = ['brand', $mark];

        if ($model) $where['where'][] = ['model', $model];


        if ($locRem) $where['whereNotIn'][] =  ['location', $locRem];

        if ($locAdd){

            if($locRem){
                foreach ($locRem as $key=>$loc){

                    if(($key = array_search($loc, $locAdd)) !== false) {

                        unset($locAdd[$key]);
                    }
                }
            }

            if ($locAdd) $where['whereIn'][] = ['location', $locAdd];
        }

        $docs = $this->carRepository->get(['doc_type'], '', ['doc_type', 'asc'], $where);

        $docs = $this->carRepository->getProperty($docs,'doc_type');

        $response['docType'] = $docs;


        return response()->json($response);
    }



    public function getSearchProperty($source, $type, Request $request){

        $mark = $request['mark'];
        $model = array_filter(explode(',',$request['model']));

        $property = $this->carRepository->getSearchProperty($source, $type, $mark, $model);

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

    public function getGalleryImg($carId) {

        $images = $this->carRepository->getGalleryImg($carId);

        if($images === null) $images = [];
        return response()->json(['images' => $images]);
    }

}
