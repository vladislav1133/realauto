<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthPagesTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testHomePageAvailable()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }
}
