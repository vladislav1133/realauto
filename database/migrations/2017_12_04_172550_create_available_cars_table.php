<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAvailableCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('available_cars', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('active');
            $table->string('meta_title');
            $table->text('meta_description');
            $table->text('meta_keywords');
            $table->string('mark','50');
            $table->string('model','50');
            $table->integer('year');
            $table->integer('price');
            $table->string('engine_type','50');
            $table->string('fuel','50');
            $table->string('transmission','50');
            $table->string('odometer','100');
            $table->string('drive','50');
            $table->text('icon');
            $table->text('gallery');
            $table->text('equipment')->nullable();
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('available_cars', function (Blueprint $table) {
            //
        });
    }
}
