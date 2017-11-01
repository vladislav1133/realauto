<?php

namespace  App\Repositories;

use App\Article;

class ArticleRepository extends Repository{

    public function __construct(Article $article){
        $this->model=$article;
    }


    public function one($alias,$relation=false){

        $article=parent::one($alias,$relation);

        return $article;
    }
}