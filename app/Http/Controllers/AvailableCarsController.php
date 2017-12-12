<?php

namespace App\Http\Controllers;

use App\Page;
use App\Repositories\PageRepository;
use Illuminate\Http\Request;

use App\Repositories\AvailableCarRepository;

class AvailableCarsController extends SiteController
{
    protected $availableCarRepository;

    public function __construct(AvailableCarRepository $availableCarRepository, PageRepository $pageRepository)
    {
        parent::__construct(new PageRepository(new Page()));

        $this->availableCarRepository = $availableCarRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $meta = $this->pageRepository->findByField('name', 'availableCars')->toArray();

        $language['drive'] = trans('cars.drive');

        $where['where'][] = ['active',1];

        $cars = $this->availableCarRepository->getCars('*', 10,'',$where);

        $carsTotal = $cars->total();

        $search = $this->availableCarRepository->getSearchProperty();

      //  dd($search);

        $content = view(env('THEME') . '.availableCarContent')
            ->with('language', $language)
            ->with('carsTotal', $carsTotal)
            ->with('cars', $cars)
            ->with('search', $search)
            ->render();

        //dd($search);
        return view(env('THEME') . '.availableCar')
            ->with('content',$content)
            ->with('meta', $meta)
            ->render();
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $car = $this->availableCarRepository->find($id);


        if($car->active === 0) abort(404);

        $car->gallery = explode(',',$car->gallery);
        $car->equipment = array_filter(explode(',',$car->equipment));


        $meta['meta_title'] = $car->meta_title;
        $meta['meta_description'] = $car->meta_description;
        $meta['meta_keywords'] = $car->meta_keywords;

        $content = view(env('THEME') . '.availableCarPage')->with('car', $car);


        return view(env('THEME') . '.availableCar')
            ->with('meta', $meta)
            ->with('content', $content)->render();

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
