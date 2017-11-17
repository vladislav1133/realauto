<?php

namespace App\Http\Controllers;

use App\Car;
use App\Page;
use App\Mail\ContactUsMail;
use App\Repositories\CarRepository;
use App\Repositories\PageRepository;
use Illuminate\Http\Request;

use Mail;
use Validator;

class IndexController extends SiteController
{

    protected $carRepository;

    public function __construct(CarRepository $carRepository, PageRepository $pageRepository)
    {
        parent::__construct(new PageRepository(new Page()));

        $this->carRepository = $carRepository;


    }

    public function index()
    {

        $meta = $this->pageRepository->findByField('name','index')->toArray();

        $language['damage'] = trans('cars.damage');
        $language['highlights'] = trans('cars.highlights');


        $cars = $this->getCars();


        $carsTotal = $cars->total();

        $search = $this->getSearch();


        return view(env('THEME') . '.index')
            ->with('language',$language)
            ->with('carsTotal', $carsTotal)
            ->with('cars', $cars)
            ->with('search', $search)
            ->with('meta', $meta)
            ->render();
    }

    public function contactUs(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:2',
            'tel' => 'required|min:5',
        ]);


        $mailable = new ContactUsMail($request->tel, $request->name, $request->message, $request->favoriteCars);
        $mailable->replyTo(env('MAIL_ADDRESS'), env('APP_NAME'));

        Mail::to(env('MAIL_ADDRESS'))->send($mailable);



        return response()->json(['success' => 'true']);
    }

    protected function getCars($source ='iaai.com', $type = 'AUTOMOBILE')
    {
        $where['where'][] = ['source',$source];
        $where['where'][] = ['vehicle_type',$type];

        $cars = $this->carRepository->get(['*'], config('settings.cars_on_page'), ['sale_date', 'asc'],$where);

        return $cars;
    }

    protected function getSearch()
    {

        $search = $this->carRepository->getSearchProperty('iaai.com','AUTOMOBILE'); //add marks,

        return $search;
    }

    public function rastamozhka()
    {
        $meta = $this->pageRepository->findByField('name','rastamozhka');


        return view(env('THEME') . '.rastamozhka')
            ->with('meta', $meta)->render();
    }


}

