<?php

namespace App\Http\Controllers;

use App\Page;
use App\Repositories\PageRepository;


class ContactController extends SiteController {

    protected $repository;

    public function __construct(PageRepository $pageRepository){
        parent::__construct(new PageRepository(new Page()));

    }

    public function index(){

        $meta = $this->pageRepository->findByField('name','contacts')->toArray();

        $content = view(env('THEME').'.contactsContent')->render();

        return view(env('THEME').'.contacts')
            ->with('content',$content)
            ->with('meta',$meta)->render();
    }
}
