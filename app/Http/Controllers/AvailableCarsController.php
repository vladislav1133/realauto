<?php

namespace App\Http\Controllers;

use App\Page;
use App\Repositories\PageRepository;
use Illuminate\Http\Request;

use App\Repositories\AvailableCarRepository;

class AvailableCarsController extends SiteController
{
    protected $availableCarRepository;

    public function __construct(AvailableCarRepository $availableCarRepository, PageRepository $pageRepository){
        parent::__construct(new PageRepository(new Page()));

        $this->availableCarRepository=$availableCarRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        //$articles=$this->getAvailableCars();
        $meta = $this->pageRepository->findByField('name','availablecars');

        $content = view(env('THEME').'.availableCarContent')
            ->render();

        return view(env('THEME').'.availableCar')
            ->with('meta', $meta)
            ->with('content', $content)
            ->render();
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $alias
     * @return \Illuminate\Http\Response
     */
    public function show($alias){
        //$article=$this->getAvailableCar($alias);

        $meta['meta_title'] = 'Доступная машина';
        $meta['meta_description'] = 'Купить машину в наличии';
        $meta['meta_keywords'] = 'Купить машину';

        $content = view(env('THEME').'.availableCarPage2') ;


        return view(env('THEME').'.availableCar')
            ->with('meta',$meta)
            ->with('content', $content)->render();

    }



    protected function getAvailableCars()
    {
        $articles = $this->articleRepository
            ->get('*', false, config('settings.articles_on_page'));

        return $articles;
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    protected function getAvailableCar($alias){
        return null;
    }
}
