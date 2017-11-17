<?php

namespace App\Http\Controllers;

use App\Repositories\PageRepository;

class SiteController extends Controller{

    protected $pageRepository;

    public function __construct(PageRepository $pageRepository){

        $this->pageRepository = $pageRepository;
    }

}

