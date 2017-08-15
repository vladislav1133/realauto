<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as'=>'home','uses'=>'IndexController@index']);
Route::get('blog',['as'=>'blog','uses'=>'BlogController@index']);

Route::group(['prefix'=>'ajax'],function (){
    Route::get('cars/{mark?}/{model?}/{year?}','AjaxCarsController@ajaxCars');
    Route::get('marks','AjaxCarsController@ajaxMarks');
    Route::get('models/{mark}','AjaxCarsController@ajaxModels');
    Route::get('years/{mark?}/{model?}','AjaxCarsController@ajaxYears');
});


