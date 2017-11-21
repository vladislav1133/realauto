<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Car extends Model
{

    protected $primaryKey = 'car_id';


    public function getSaleDateAttribute($date){

        return  Carbon::createFromTimestamp($date / 1000)->format('d/m/Y');
    }





}
