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
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Authorization,Origin, Content-Type, X-Auth-Token, X-XSRF-TOKEN');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('cliente', 'ClienteController@index');
Route::get('cliente/{id}', 'ClienteController@show');
Route::post('cliente', 'ClienteController@create');
Route::put('cliente/{id}', 'ClienteController@update');
Route::delete('cliente/{id}', 'ClienteController@destroy');

Route::get('facultad', 'FacultadController@index');
Route::get('facultad/{id}', 'FacultadController@show');
Route::post('facultad', 'FacultadController@create');
Route::put('facultad/{id}', 'FacultadController@update');
Route::delete('facultad/{id}', 'FacultadController@destroy');

Route::get('escuela', 'EscuelaController@index');
Route::get('escuela/{id}', 'EscuelaController@show');
Route::post('escuela', 'EscuelaController@create');
Route::put('escuela/{id}', 'EscuelaController@update');
Route::delete('escuela/{id}', 'EscuelaController@destroy');
