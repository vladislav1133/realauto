<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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



}
