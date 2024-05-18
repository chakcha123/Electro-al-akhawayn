<?php

use App\Http\Controllers\CartController;


Route::get('/shoppingcard', [CartController::class, 'viewCart'])->middleware(['auth', 'verified'])->name('cart.view');
Route::post('/product/{id}', [CartController::class, 'addToCart'])->name('cart.add.product');
// Route::get('/product/{id}/details', [CartController::class, 'details'])->name('cart.show.product');

Route::post('/service/{id}', [CartController::class, 'addServToCart'])->name('cart.add.service');
Route::post('remove/{id}', [CartController::class, 'removeCart'])->name('cart.remove');
Route::post('Decrease/{id}', [CartController::class, 'Decrease'])->name('cart.Decrease');
Route::post('Increase/{id}', [CartController::class, 'Increase'])->name('cart.Increase');
Route::post('clear', [CartController::class, 'clearAllCart'])->name('cart.clear');
