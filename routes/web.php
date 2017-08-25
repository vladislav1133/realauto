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



// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
//Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
//Route::post('register', 'Auth\RegisterController@register');
Route::match(['get', 'post'], 'register', function(){
    return redirect('/');
});
// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');


Route::get('/home', 'HomeController@index');
