<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CarsTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCars(){
        $response = $this->json('GET','/cars');

        $response->assertStatus(200);
    }

    public function testMarks(){
        $response = $this->json('GET','/car/marks');

        $response->assertStatus(200);
    }

    public function testModels(){
        $response = $this->json('GET','car/models/{mark}',
            ['mark'=>'CHEVROLET']);

        $response->assertStatus(200);
    }

    public function testYears(){
        $response = $this->json('GET','car/years/{mark?}/{model?}',
            ['mark' =>'CHEVROLET','CAPTIVA LT']);

        $response->assertStatus(200);
    }

    public function testFindCar(){
        $response = $this->json('GET','cars/{mark?}/{model?}/{year?}',
            ['mark' =>'CHEVROLET','CAPTIVA LT','years' => '2013']);

        $response->assertStatus(200);
    }
}
