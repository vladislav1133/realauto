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

    public function getMarks(Request $request)
    {

        $whereIn = [];
        $where = [];

        $drive = $request->input('drive');
        $fuel = $request->input('fuel');
        $docs = $request->input('docs');
        $location = $request->input('location');
        $highlight = $request->input('highlight');
        $yearTo = $request->input('yearTo');
        $yearFrom = $request->input('yearFrom');


        if ($yearFrom) {
            $where[] = ['year', '>=', $yearFrom];
        }
        if ($yearTo) {
            $where[] = ['year', '<=', $yearTo];
        }
        if ($fuel) array_push($whereIn, ['fuel', $fuel]);
        if ($docs) array_push($whereIn, ['doc_type', $docs]);


        if ($location) array_push($whereIn, ['location', $location]);
        if ($highlight) array_push($whereIn, ['highlights', $highlight]);
        if ($drive) {

            $drive_type = config('car_search.drive_type');

            $driveSearch[0] = 'drive';

            $driveSearch[1] = array();

            foreach ($drive as $type) {

                foreach ($drive_type[$type] as $item) {

                    array_push($driveSearch[1], $item);
                }
            }

            $whereIn[] = $driveSearch;
        }

        $names = $this->carRepository->get('name', '', false, $where, $whereIn, '')->toArray();

        $marks = [];

        foreach ($names as $arr) {

            array_push($marks, $arr['name']);
        }

        foreach ($marks as &$item) {

            $item = preg_split('#[ /]#', $item);
            $item = $item[1];

        }

        $marks = array_unique($marks);

        sort($marks);

        $response['marks'] = $marks;

        return response()->json($response);
    }

    public function getModels(Request $request)
    {

        $whereIn = [];
        $where = [];

        $mark = $request->input('mark');
        $drive = $request->input('drive');
        $fuel = $request->input('fuel');
        $docAdd = $request->input('docAdd');
        $docRem = $request->input('docRem');
        $location = $request->input('location');
        $highlight = $request->input('highlight');
        $yearTo = $request->input('yearTo');
        $yearFrom = $request->input('yearFrom');


        if ($mark) {
            $where[] = ['name', 'like', '%' . $mark . '%'];
        }
        if ($yearFrom) {
            $where[] = ['year', '>=', $yearFrom];
        }
        if ($yearTo) {
            $where[] = ['year', '<=', $yearTo];
        }
        if ($fuel) array_push($whereIn, ['fuel', $fuel]);
        if ($docAdd) {

            $docList = [];

            $docType = $docAdd;

            if ($docRem) {

                foreach ($docRem as $rem) {

                    unset($docType[array_search($rem, $docType)]);
                }
            }

            foreach ($docType as $doc) {

                array_push($docList, $doc);
            }

            array_push($whereIn, ['doc_type', $docList]);
        }
        if ($location) array_push($whereIn, ['location', $location]);
        if ($highlight) array_push($whereIn, ['highlights', $highlight]);
        if ($drive) {

            $drive_type = config('car_search.drive_type');

            $driveSearch[0] = 'drive';

            $driveSearch[1] = array();

            foreach ($drive as $type) {

                foreach ($drive_type[$type] as $item) {

                    array_push($driveSearch[1], $item);
                }
            }

            $whereIn[] = $driveSearch;
        }

        $names = $this->carRepository->get('name', '', false, $where, $whereIn, '')->toArray();

        $models = [];

        foreach ($names as $arr) {

            array_push($models, $arr['name']);
        }

        foreach ($models as &$item) {

            $item = preg_split('#[ /]#', $item);
            $item = $item[2];

        }

        $models = array_unique($models);

        sort($models);

        $response['models'] = $models;

        return response()->json($response);
    }

    public function getYears(){

        $response['years'] = $this->carRepository->getYears();

        return response()->json($response);
    }

    public function getDocs(Request $request)
    {

        $location = $request->input('location');

        $docs = array();

        $whereIn = false;

        if ($location) {


            $whereIn[] = ['location', $location];
        }


        $queryArr = $this->carRepository->get(['doc_type'], '', ['doc_type', 'asc'], '', $whereIn);

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

        $driveSearch = [];

        $drive = $request->input('drive');
        $mark = $request->input('mark');
        $model = $request->input('model');
        $yearFrom = $request->input('yearFrom');
        $yearTo = $request->input('yearTo');
        $docAdd = $request->input('docAdd');
        $docRem = $request->input('docRem');
        $highlight = $request->input('highlight');
        $fuel = $request->input('fuel');
        $location = $request->input('location');
        $favoriteCars = $request->input('favoriteCars');
        $lot = $request->input('lot');
        $vin = $request->input('vin');
        //$sort = $request->input('sort');


        $drive_type = config('car_search.drive_type');

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


        if ($docRem) array_push($whereNotIn, ['doc_type', $docRem]);


        if ($docAdd){

            if($docRem){
                foreach ($docRem as $doc){
                    if(($key = array_search($doc, $docAdd)) !== false) {
                        unset($docAdd[$key]);
                    }
                }
            }

            if ($docAdd) array_push($whereIn, ['doc_type', $docAdd]);
        }


        if ($fuel) array_push($whereIn, ['fuel', $fuel]);

        if ($highlight) array_push($whereIn, ['highlights', $highlight]);

        if ($location) array_push($whereIn, ['location', $location]);

        if ($favoriteCars) array_push($whereIn, ['lot_id', $favoriteCars]);

        if($lot) {
            $where[] = ['lot_id', '=', $lot];
        }

        if($vin) {
            $where[] = ['vin', '=', $vin];
        }

        if ($mark) {
            $where[] = ['name', 'like', '%' . $mark . '%'];
        }

        if ($model) {
            $where[] = ['name', 'like', '%' . $model . '%'];
        }

        if ($yearFrom) {
            $where[] = ['year', '>=', $yearFrom];
        }

        if ($yearTo) {
            $where[] = ['year', '<=', $yearTo];
        }


        $orderBy = ['sale_date', 'asc'];



        if ($yearTo || $yearFrom) {

            $orderBy = [];
            $orderBy[0] = 'year';
            $orderBy[1] = 'asc';
        }

        $cars = $this->carRepository->getCars(['*'], config('settings.cars_on_page'), $orderBy, $where, $whereIn, $whereNotIn);

        $carsCount = $cars->total();

        $carsTable = view(env('THEME') . '.indexContent')->with('cars', $cars)->render();

        return ['table' => $carsTable, 'carsCount' => $carsCount];
    }

    public function search($query) {

        $res = $this->carRepository->search($query);

        return response()->json(['found'=>true,'col'=>$res]);
    }




}
