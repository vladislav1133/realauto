<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//CarsController
Route::get('cars','Api\CarsController@getCars');
Route::get('cars/marks/{type}','CarsController@getMarks');
Route::get('cars/models/{type}/{mark}','CarsController@getModels');
Route::post('cars/docs','CarsController@getDocs');
Route::get('cars/search/{query}','CarsController@search');
Route::get('cars/property/{type}/{mark?}/{model?}','CarsController@getSearchProperty');
Route::post('cars/favorite/remove','CarsController@removeFavorite');


Route::get('available-cars/models/{mark}', 'Api\AvailableCarsController@getModels');