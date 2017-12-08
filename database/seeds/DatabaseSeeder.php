<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(AvailableCarsSeeder::class);
         //$this->call(ArticlesSeeder::class);
        // $this->call(SitePagesSeeder::class);
       //  $this->call(GeneralDataSeeder::class);

    }
}
