<?php

namespace App\Http\Controllers;

use App\Repositories\ArticleRepository;
use App\Repositories\GeneralDataRepository;
use App\GeneralData;

use Illuminate\Http\Request;

class ArticlesController extends SiteController
{
    protected $articleRepository;

    public function __construct(ArticleRepository $articleRepository, GeneralDataRepository $generalDataRepository){
        parent::__construct(new GeneralDataRepository(new GeneralData()));
        $this->articleRepository=$articleRepository;

        $this->indexInfo = $this->generalDataRepository->getInfo('*');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles=$this->getArticles();

        $meta = $this->articleRepository->getMeta('blog');

        $content = view(env('THEME').'.blogContent')
            ->with('articles',$articles)
            ->render();


        return view(env('THEME').'.blog')
            ->with('info',$this->indexInfo)
            ->with('meta',$meta)
            ->with('content', $content)->render();
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
     * Display the specified resource.
     *
     * @param  int  alias
     * @return \Illuminate\Http\Response
     */
    public function show($alias)
    {
        $article=$this->getArticle($alias);

        $meta['meta_title'] = $article['meta_title'];
        $meta['meta_description'] = $article['meta_description'];
        $meta['meta_keywords'] = $article['meta_keywords'];

        $content = view(env('THEME').'.blogPage')->with('article',$article);

        return view(env('THEME').'.blog')
            ->with('meta',$meta)
            ->with('info',$this->indexInfo)
            ->with('content', $content)->render();
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

    }

    protected function getArticles()
    {
        $articles = $this->articleRepository
            ->get('*',config('settings.articles_on_page'),['created_at','desc']);

        return $articles;
    }

    protected function getArticle($alias){

        $article = $this->articleRepository->one($alias);

        return $article;
    }
}
