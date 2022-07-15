<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\TodoController;

Route::controller(LoginController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/logout', 'logout');
    Route::post('/register', 'register');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $req) {
        return $req->user();
    });

    Route::controller(TodoController::class)->group(function () {
        Route::prefix('/todos')->group(function () {
            Route::get('', 'getTodos');
            Route::delete('', 'deleteTodos');
            Route::post('', 'addTodo');
            Route::get('/{id}', 'getTodo');
            Route::put('/{id}', 'editTodo');
            Route::delete('/{id}', 'deleteTodo');
        });
    });
});
