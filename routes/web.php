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


//Pages
Route::get('/', ['as'=>'home','uses'=>'IndexController@index']);
Route::get('contacts', ['as'=>'contacts','uses'=>'ContactController@index']);
Route::resource('blog','ArticlesController', ['only' =>['index','show']]);
//Route::resource('availablecars', 'AvailableCarsController', ['only' => ['index', 'show']]);

Route::post('contact-us','IndexController@contactUs');

//CarsController
Route::get('cars/{mark?}/{model?}/{from?}/{to?}','CarsController@getCars');
Route::get('car/marks','CarsController@getMarks');
Route::get('car/models/{mark}','CarsController@getModels');
Route::get('car/years/{mark?}/{model?}','CarsController@getYears');

Route::get('favoritecars','CarsController@getFavoriteCars');
Route::post('favoritecars','CarsController@getFavoriteCars');


// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
//Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
//Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::get('/home', 'HomeController@index');
