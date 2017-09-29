<?php

namespace App\Http\Controllers;

use App\GeneralData;
use App\Mail\ContactUsMail;
use App\Repositories\CarRepository;
use App\Repositories\GeneralDataRepository;

use Illuminate\Http\Request;

use Mail;
use Validator;

class IndexController extends SiteController{

    protected $carRepository;

    public function __construct(CarRepository $carRepository,GeneralDataRepository $generalDataRepository){
        parent::__construct(new GeneralDataRepository(new GeneralData()));
        $this->carRepository=$carRepository;

        $this->indexInfo = $this->generalDataRepository->getInfo('*');
    }

    public function index(){

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


        foreach ($doc_type as &$item){

            $item = substr($item,4,strlen($item));
        }

        $doc_type = array_unique($doc_type);

        $cars=$this->getCars();
        //dd($cars);
        $carMarks=$this->carRepository->getMarks();

        $carYears=$this->carRepository->getYears();

        return view(env('THEME').'.index')
            ->with('cars',$cars)
            ->with('carMarks',$carMarks)
            ->with('carYears',$carYears)
            ->with('info',$this->indexInfo)
            ->with('doc_type',$doc_type)
            ->with('meta',$meta)->render();
    }

    public function contactUs(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:50',
            'tel' => 'required|max:50'
        ]);

        if ($validator->passes()) {

            Mail::to(env('MAIL_ADDRESS'))->send(new ContactUsMail($request->tel, $request->name));
            return response()->json(['success'=>'true']);
        }

        return response()->json(['error' => $validator->errors()->all()]);
    }

    protected function getCars(){

        $cars=$this->carRepository
            ->get(['*'],false,config('settings.cars_on_page'),false,array('col'=>'createdAt','sortDir'=>'desc'));

        return $cars;
    }




}

