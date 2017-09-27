<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable= [
        'name', 'fuel','location','buy_it_now','year','odometer',
        'engine_type','path_to_image','lot_id','doc_type','primary_damage',
        'secondary_damage','current_bid','sale_date'
    ];



    protected $primaryKey = 'car_id';
}
