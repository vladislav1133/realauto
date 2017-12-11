<?php

namespace App\Http\Controllers\Api;

use App\Repositories\AvailableCarRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AvailableCarsController extends Controller
{
    protected $availableCarRepository;

    public function __construct(AvailableCarRepository $availableCarRepository)
    {
        $this->availableCarRepository = $availableCarRepository;
    }

    public function getModels($mark){

        $models = $this->availableCarRepository->getModels($mark);


        return response()->json(['success'=>true,'models'=>$models]);
    }

    public function getCars(Request $request)
    {


        $where = [];

        $mark = $request->mark;
        $model = $request->model;
        $yearFrom = $request->yearFrom;
        $yearTo = $request->yearTo;



        if($mark === 'all') $mark = false;
        if ($mark) $where['where'][] = ['mark',$mark];

        if ($model) $where['whereIn'][] = ['model',$model];


        if ($yearFrom) {
            $where['where'][] = ['year', '>=', $yearFrom];
        }

        if ($yearTo) {
            $where['where'][] = ['year', '<=', $yearTo];
        }

        $orderBy = ['created_at', 'asc'];


        $cars = $this->availableCarRepository->getCars(['*'], config('settings.cars_on_page'), $orderBy, $where);

        $carsCount = $cars->total();

        $language['damage'] = trans('cars.damage');
        $language['highlights'] = trans('cars.highlights');
        $language['drive'] = trans('cars.drive');

        $carsTable = view(env('THEME') . '.availableCarTable')->with('cars', $cars)->with('language',$language)->render();

        return ['table' => $carsTable, 'carsCount' => $carsCount];
    }

}
