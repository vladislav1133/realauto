<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Car extends Model
{

    protected $primaryKey = 'car_id';





    /**
     * Get the corrected highlights.
     *
     * @return string
     */
    public function getHighlightsAttribute($highlights)
    {
        if ($highlights === 'RUNS AND DRIVES') {

            $highlights = 'RUN AND DRIVE';
        }

        return $highlights;
    }

    public function getOdometerAttribute($odometer) {


        if (is_string($odometer)) {
            $odometer = substr($odometer, 0, strpos($odometer, 'mi') + 2);
        }
        return $odometer;
    }

    public function getSaleDateAttribute($date){

        return  Carbon::createFromTimestamp($date / 1000)->format('d/m/Y');
    }





}
