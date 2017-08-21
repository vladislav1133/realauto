<?php

namespace  App\Repositories;

use App\Article;

class ArticleRepository extends Repository{

    public function __construct(Article $article){
        $this->model=$article;
    }

    public function get($select='*',$take=false,$pagination=false,$where=false,$orderBy=false){
        $articles=parent::get($select,$take,$pagination,$where,$orderBy);

        return $articles;
    }

    public function one($alias,$relation=false){

        $article=parent::one($alias,$relation);

        return $article;
    }
}