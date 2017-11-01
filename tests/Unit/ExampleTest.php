<?php

namespace Tests\Unit;

use App\Car;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;


use App\Repositories\CarRepository;


class ExampleTest extends TestCase
{


    public function testBasicTest()
    {


        $carRep = new CarRepository(new Car);
        $this->assertEquals('year',$carRep->search(1994));


    }
}
