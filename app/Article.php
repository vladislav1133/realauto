<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model {

    protected $fillable = ['id','text','review','alias','title','img','created_at'];
}
