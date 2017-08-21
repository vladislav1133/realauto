<?php

use Illuminate\Database\Seeder;

use App\GeneralData;

class GeneralDataSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        GeneralData::truncate();

        GeneralData::create([
            'address' => 'Улица Пушкина калатукина, 37921',
            'email' => 'hello@world.com',
            'banner' => 'Real auto description',
            'tel' => '{"tel":"+380973532630","text":"+38 (097) 353 26 30"}',
        ]);
    }
}
