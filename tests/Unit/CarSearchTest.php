<?php

namespace Tests\Unit;

use Illuminate\Support\Facades\App;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Car;
use App\Repositories\CarRepository;

class CarSearchTest extends TestCase
{


    public function testSearchValidate()
    {


        $carRep = new CarRepository(new Car);


        $this->assertEquals('year',$carRep->searchValidate(1994));
        $this->assertEquals('location',$carRep->searchValidate('FL'));
        $this->assertEquals('vin',$carRep->searchValidate('3GNAL3EK5DS606102'));
        $this->assertEquals('lot_id',$carRep->searchValidate('27960987'));

    }
}
