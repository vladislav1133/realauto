<?php

Route::get('', ['as' => 'admin.dashboard', function () {

	return AdminSection::view('', 'Административная панель');
}]);