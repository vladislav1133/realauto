<?php

namespace App\Http\Controllers;

use App\Repositories\ArticleRepository;
use App\Page;
use App\Repositories\PageRepository;

class ArticlesController extends SiteController
{
    protected $articleRepository;

    public function __construct(ArticleRepository $articleRepository, PageRepository $pageRepository){

        parent::__construct(new PageRepository(new Page()));

        $this->articleRepository=$articleRepository;

    }

    public function index()
    {
        $articles=$this->getArticles();

        $meta = $this->pageRepository->findByField('name','blog')->toArray();

        $content = view(env('THEME').'.blogContent')
            ->with('articles',$articles)
            ->render();

        return view(env('THEME').'.blog')
            ->with('meta',$meta)
            ->with('content', $content)->render();
    }


    public function show($alias)
    {
        $article=$this->getArticle($alias);

        $meta['meta_title'] = $article['meta_title'];
        $meta['meta_description'] = $article['meta_description'];
        $meta['meta_keywords'] = $article['meta_keywords'];

        $content = view(env('THEME').'.blogPage')->with('article',$article);

        return view(env('THEME').'.blog')
            ->with('meta',$meta)
            ->with('content', $content)->render();
    }


    protected function getArticles()
    {
        $articles = $this->articleRepository
            ->all(config('settings.articles_on_page'));

        return $articles;
    }

    protected function getArticle($alias){

        $article = $this->articleRepository->findByField('alias', $alias);

        return $article;
    }
}
