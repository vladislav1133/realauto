<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable= [
        'name','year','odometer','engine_type','path_to_image'
    ];



    protected $primaryKey = 'car_id';
}
