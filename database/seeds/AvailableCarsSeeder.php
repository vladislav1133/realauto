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


        AvailableCar::create([
            'active' => 1,
            'meta_title' => 'title',
            'meta_description' => 'desc',
            'meta_keywords',
            'mark' => 'Toyota',
            'model' => 'Camry',
            'year' => '1995',
            'price' => 3000,
            'engine_type' => '1.5 L',
            'fuel' => 'Gas',
            'transmission' => 'Automatic',
            'odometer' => '250',
            'drive' => 'All While Drive',
            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
            'description' => '<p>wqeqw</p>'
        ]);
        AvailableCar::create([
            'active' => 1,
            'meta_title' => 'title',
            'meta_description' => 'desc',
            'meta_keywords',
            'mark' => 'Toyota',
            'model' => 'Camry',
            'year' => '1995',
            'price' => 3000,
            'engine_type' => '1.5 L',
            'fuel' => 'Gas',
            'transmission' => 'Automatic',
            'odometer' => '250',
            'drive' => 'All While Drive',
            'icon' => 'images/available_cars/4b53f0b50084ece3d03097ce669d3c7a.jpg',
            'gallery' => 'images/available_cars/f9907adc2a3c049c3921b56dc75c8a97.jpg,images/available_cars/ec435c6b4595ca387b76cbd783c4780b.jpg,images/available_cars/d01dcf2beef737cb1464321af549b36b.jpg',
            'description' => '<p>wqeqw</p>'
        ]);


//        foreach (range(1,10) as $i) {
//
//            AvailableCar::create([
//                'title' => 'Только сейчас скидка на BMW-e46',
//                'alias' => 'sale-bmw-e46-'.$i,
//                'review' => 'Продажа автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля автомобиля',
//                'text' => '<p>
//                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                            </p>
//
//                            <p>
//                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                            </p>
//                            <p>
//                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley
//                            </p>
//                            <blockquote>
//                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. It was
//                            </blockquote>
//                            <p>
//                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. It was
//                            </p>
//                            <ul>
//                            <li>Amet pellentesque eu augue</li>
//                            <li>Magnis dis parturient montes ridiculus</li>
//                            <li>Ullamcorper efficitur amet eleifend</li>
//                            </ul>',
//                'img' => 'public/images/uploads/1140x360.png',
//                'meta_title' => 'title'.$i,
//                'meta_description' => 'desc',
//                'meta_keywords' => 'keys',
//            ]);
//        }
    }
}
