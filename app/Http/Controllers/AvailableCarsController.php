<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repositories\GeneralDataRepository;
use App\GeneralData;

use App\Repositories\AvailableCarRepository;

class AvailableCarsController extends SiteController
{
    protected $availableCarRepository;

    public function __construct(AvailableCarRepository $availableCarRepository, GeneralDataRepository $generalDataRepository){
        parent::__construct(new GeneralDataRepository(new GeneralData()));
        $this->availableCarRepository=$availableCarRepository;

        $this->indexInfo = $this->generalDataRepository->getInfo('*');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        //$articles=$this->getAvailableCars();
        $meta = $this->availableCarRepository->getMeta('availablecars');

        $content = view(env('THEME').'.availableCarContent')
            ->render();

        return view(env('THEME').'.availableCar')
            ->with('info',$this->indexInfo)
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
        $article=$this->getAvailableCar($alias);

        $meta['meta_title'] = $article['meta_title'];
        $meta['meta_description'] = $article['meta_description'];
        $meta['meta_keywords'] = $article['meta_keywords'];

        $content = view(env('THEME').'.availableCarPage2')->with('article',$article);

        return view(env('THEME').'.blog')
            ->with('meta',$meta)
            ->with('info',$this->indexInfo)
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
