<?php

namespace App\Http\Controllers;

use App\Car;
use App\GeneralData;
use App\Mail\ContactUsMail;
use App\Repositories\CarRepository;
use App\Repositories\GeneralDataRepository;

use Illuminate\Http\Request;

use Mail;
use Validator;
use Carbon\Carbon;

class IndexController extends SiteController
{

    protected $carRepository;

    public function __construct(CarRepository $carRepository, GeneralDataRepository $generalDataRepository)
    {
        parent::__construct(new GeneralDataRepository(new GeneralData()));
        $this->carRepository = $carRepository;

        $this->indexInfo = $this->generalDataRepository->getInfo('*');
    }

    public function index()
    {

        $meta = $this->carRepository->getMeta('index');

        $doc_type = [
            'AL - BILL OF SALE',
            'AL - CERT OF TITLE-FLOOD SALVAGE',
            'AL - CERT OF TITLE-PARTS ONLY SALVG',
            'AL - CERT OF TITLE-REBUILT',
            'AL - CERT OF TITLE-SALVAGE TITLE',
            'AL - CERT OF TITLE-SALVAGE TITLE (P)',
            'AL - CERTIFICATE OF TITLE',
            'AL - CLEAN TITLE - AL BID CARD REQ',
            'AR - CERT OF TITLE-SALVAGE',
            'AR - CERTIFICATE OF TITLE',
            'AZ - CERT OF TITLE - SALVAGE',
            'AZ - CERTIFICATE OF TITLE',
            'CA - CERT OF TITLE-SALVAGED',
            'CA - JUNK RECEIPT',
            'CA - NON-REPAIRABLE VEHICLE CERT',
            'CA - SALVAGE CERTIFICATE',
            'CA - SALVAGE CERTIFICATE (P)',
            'CO - CERT OF TITLE-SALVAGE HISTORY (P)',
            'CO - CERTIFICATE OF TITLE',
            'CO - CERTIFICATE OF TITLE (P)',
            'CO - SALVAGE TITLE',
            'CT - ABANDONED VEH SALE NOTIFICATIO',
            'CT - CERT OF TITLE-SALVAGE',
            'CT - CERTIFICATE OF TITLE',
            'DC - CERTIFICATE OF TITLE'
        ];

        $cars = $this->getCars();

        $carsTotal = $cars->total();

        $search = $this->getSearch();

        return view(env('THEME') . '.index')
            ->with('carsTotal', $carsTotal)
            ->with('cars', $cars)
            ->with('search', $search)
            ->with('info', $this->indexInfo)
            ->with('doc_type', $doc_type)
            ->with('meta', $meta)->render();
    }

    public function contactUs(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:2',
            'tel' => 'required|min:5',
        ]);


        Mail::to(env('MAIL_ADDRESS'))->send(new ContactUsMail($request->tel, $request->name, $request->message, $request->favoriteCars));

        return response()->json(['success' => 'true']);
    }

    protected function getCars()
    {

        $motoBodyStyle = config('car_search.body_style.moto');

        $whereNotIn[] = ['body_style', $motoBodyStyle];

        $cars = $this->carRepository
            ->getCars(['*'], config('settings.cars_on_page'), ['sale_date', 'asc'], '', '', $whereNotIn);


        return $cars;
    }

    protected function getSearch()
    {

        $search = $this->carRepository->getSearchProperty('car'); //add marks,

        $search['marks'] = $this->carRepository->getMarks('car');

        //dd($search);

        return $search;
    }

    public function rastamozhka()
    {
        $meta = $this->carRepository->getMeta('index');


        return view(env('THEME') . '.rastamozhka')
            ->with('meta', $meta)->render();
    }


}

