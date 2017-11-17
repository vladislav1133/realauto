<?php

namespace  App\Repositories;

use App\Article;

class ArticleRepository extends Repository{

    public function __construct(Article $article){
        $this->model=$article;
    }

    public function all($paginate=0) {

        return $this->model->select('*')->orderBy('created_at','desc')->paginate($paginate);
    }


}