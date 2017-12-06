<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Car extends Model
{

    protected $primaryKey = 'car_id';


    public function getSaleDateAttribute($date){

        return  Carbon::parse($date)->format('d/m/Y');
    }





}
