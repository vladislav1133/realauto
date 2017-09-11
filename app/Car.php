<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable= [
        'name','year','odometer','engine_type','path_to_image','lot_id','transmission','primary_damage','secondary_damage'
    ];



    protected $primaryKey = 'car_id';
}
