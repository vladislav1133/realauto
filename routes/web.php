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

Route::resource('blog','ArticlesController',[
    'only' =>['index','show']
]);

Route::group(['prefix'=>'ajax'],function (){
    Route::get('cars/{mark?}/{model?}/{year?}','AjaxCarsController@ajaxCars');
    Route::get('marks','AjaxCarsController@ajaxMarks');
    Route::get('models/{mark}','AjaxCarsController@ajaxModels');
    Route::get('years/{mark?}/{model?}','AjaxCarsController@ajaxYears');
});



Auth::routes();

Route::get('/home', 'HomeController@index');
