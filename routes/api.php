<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CartController;

Route::controller(LoginController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/logout', 'logout');
    Route::post('/register', 'register');
});

Route::get('/products', [ProductController::class, 'getProducts']);
Route::get('/products/{id}', [ProductController::class, 'getProduct']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $req) {
        return $req->user();
    });

    Route::controller(CartController::class)->group(function () {
        Route::prefix('/cart-items')->group(function () {
            Route::get('', 'getCartItems');
            Route::delete('', 'deleteCartItems');
            Route::post('', 'createCartItem');
            Route::get('/{id}', 'getCartItem');
            Route::put('/{id}', 'updateCartItem');
            Route::delete('/{id}', 'deleteCartItem');
        });
    });
        // Route::controller(ProductController::class)->group(function () {
    //     Route::prefix('/products')->group(function () {
    //     });
    // });
});
