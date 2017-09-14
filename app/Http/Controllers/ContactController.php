<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repositories\GeneralDataRepository;
use App\GeneralData;


class ContactController extends SiteController {

    protected $repository;

    public function __construct(GeneralDataRepository $generalDataRepository){
        parent::__construct(new GeneralDataRepository(new GeneralData()));



        $this->indexInfo = $this->generalDataRepository->getInfo('*');
    }

    public function index(){

        $meta = $this->generalDataRepository->getMeta('contacts');

        $content = view(env('THEME').'.contactsContent')->render();

        return view(env('THEME').'.contacts')
            ->with('content',$content)
            ->with('info',$this->indexInfo)
            ->with('meta',$meta)->render();
    }
}
