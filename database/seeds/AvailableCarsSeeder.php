<?php

use Illuminate\Database\Seeder;

use App\AvailableCar;

class AvailableCarsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        AvailableCar::truncate();

        factory(AvailableCar::class)->create([
            'active' => 1,
            'meta_title' => 'title',
            'meta_description' => 'desc',
            'meta_keywords',
            'mark' => 'Toyota',
            'model' => 'Camry',
            'year' => 544,
            'price' => 3000,
            'engine_type' => '1.5 L',
            'fuel' => 'Gas',
            'transmission' => 'Automatic',
            'odometer' => '250',
            'drive' => 'All While Drive',
            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
            'description' => '<p>Какое то описание автомобиля</p>',
            'created_at' => '2017-12-06 14:31:01',
            'updated_at' => '2017-12-06 14:31:01',
            'equipment' =>'we'
        ]);




//        AvailableCar::create([
//            'active' => 1,
//            'meta_title' => 'title',
//            'meta_description' => 'desc',
//            'meta_keywords',
//            'mark' => 'Toyota',
//            'model' => 'Corolla',
//            'year' => 2000,
//            'price' => 3000,
//            'engine_type' => '1.5 L',
//            'fuel' => 'Gas',
//            'transmission' => 'Automatic',
//            'odometer' => '250',
//            'drive' => 'All While Drive',
//            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
//            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
//            'description' => '<p>Какое то описание автомобиля</p>'
//        ]);
//
//
//        AvailableCar::create([
//            'active' => 1,
//            'meta_title' => 'title',
//            'meta_description' => 'desc',
//            'meta_keywords',
//            'mark' => 'Toyota',
//            'model' => 'Camry',
//            'year' => 1995,
//            'price' => 3000,
//            'engine_type' => '1.5 L',
//            'fuel' => 'Gas',
//            'transmission' => 'Automatic',
//            'odometer' => '250',
//            'drive' => 'All While Drive',
//            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
//            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
//            'description' => '<p>Какое то описание автомобиля</p>'
//        ]);
//
//        AvailableCar::create([
//            'active' => 1,
//            'meta_title' => 'title',
//            'meta_description' => 'desc',
//            'meta_keywords',
//            'mark' => 'BMW',
//            'model' => 'X5',
//            'year' => 2006,
//            'price' => 250,
//            'engine_type' => '1.5 L',
//            'fuel' => 'Gas',
//            'transmission' => 'Automatic',
//            'odometer' => '250',
//            'drive' => 'All While Drive',
//            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
//            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
//            'description' => '<p>Какое то описание автомобиля</p>'
//        ]);
//
//
//        AvailableCar::create([
//            'active' => 1,
//            'meta_title' => 'title',
//            'meta_description' => 'desc',
//            'meta_keywords',
//            'mark' => 'BMW',
//            'model' => 'X3',
//            'year' => 2017,
//            'price' => 250,
//            'engine_type' => '1.5 L',
//            'fuel' => 'Gas',
//            'transmission' => 'Automatic',
//            'odometer' => '250',
//            'drive' => 'All While Drive',
//            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
//            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
//            'description' => '<p>Какое то описание автомобиля</p>'
//        ]);
//
//
//
//        AvailableCar::create([
//            'active' => 1,
//            'meta_title' => 'title',
//            'meta_description' => 'desc',
//            'meta_keywords',
//            'mark' => 'BMW',
//            'model' => 'X1',
//            'year' => 2011,
//            'price' => 250,
//            'engine_type' => '1.5 L',
//            'fuel' => 'Gas',
//            'transmission' => 'Automatic',
//            'odometer' => '250',
//            'drive' => 'All While Drive',
//            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
//            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
//            'description' => '<p>Какое то описание автомобиля</p>'
//        ]);
//
//
//
//
//
//        foreach (range(1,25) as $i) {
//
//            AvailableCar::create([
//                'active' => 1,
//                'meta_title' => 'title',
//                'meta_description' => 'desc',
//                'meta_keywords',
//                'mark' => 'BMW',
//                'model' => 'X1',
//                'year' => 2000 + $i,
//                'price' => 250 + $i*50,
//                'engine_type' => '1.5 L',
//                'fuel' => 'Gas',
//                'transmission' => 'Automatic',
//                'odometer' => '250',
//                'drive' => 'All While Drive',
//                'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
//                'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
//                'description' => '<p>Какое то описание автомобиля</p>'
//            ]);
//
//        }
    }
}
