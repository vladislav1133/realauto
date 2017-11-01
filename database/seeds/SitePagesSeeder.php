<?php

use Illuminate\Database\Seeder;

use App\Page;

class SitePagesSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        Page::truncate();

        Page::create([
            'name' => 'index',
            'meta_title' => 'Real auto',
            'meta_description' => 'Real auto description',
            'meta_keywords' => 'realauto, buy car kharkiv',
        ]);

        Page::create([
            'name' => 'blog',
            'meta_title' => 'Real auto',
            'meta_description' => 'Real auto description',
            'meta_keywords' => 'realauto, buy car kharkiv',
        ]);
    }
}
