<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Page;
use App\Repositories\PageRepository;


class FaqController extends SiteController
{
    protected $repository;

    public function __construct(PageRepository $pageRepository){
        parent::__construct(new PageRepository(new Page()));

    }

    public function index(){

        $meta = $this->pageRepository->findByField('name','faq');

        $content = view(env('THEME').'.contactsContent')->render();

        return view(env('THEME').'.faq')
            ->with('content',$content)
            ->with('meta',$meta)->render();
    }
}
