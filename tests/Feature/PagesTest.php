<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class PagesTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCheckIndexPage(){

        $page = $this->get('/');
        $page->assertStatus(200);
    }

    public function testCheckRastamozhkaPage(){

        $page = $this->get('/rastamozhka');
        $page->assertStatus(200);
    }

    public function testCheckAvailableCarsPage(){

        $page = $this->get('/availablecars');
        $page->assertStatus(200);

        $page = $this->get('/availablecars/1');
        $page->assertStatus(200);
    }

    public function testCheckBlogPage(){

        $page = $this->get('/blog');
        $page->assertStatus(200);

        $page = $this->get('/blog/почему_украинцам_пора_прощаться_с_еврономерами');
        $page->assertStatus(200);
    }

    public function testCheckContactsPage(){

        $page = $this->get('/contacts');
        $page->assertStatus(200);

    }
}
