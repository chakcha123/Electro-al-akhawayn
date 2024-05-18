<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductManagementController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StoreController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// ----------------------------------- home ---------------------------------------------------------------------
Route::get('/', [StoreController::class, 'home'])->name('home');
// -----------------------------------user part---------------------------------------------------------------------
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// -----------------------------------store part---------------------------------------------------------------------
Route::get('/store', [StoreController::class, 'products'])->name('store');
Route::get('/services', [StoreController::class, 'services'])->name('services');
// -----------------------------------Contact us/About us---------------------------------------------------------------------
Route::get('/contact',[ContactController::class ,'index'])->name('contact.view');
Route::post('/createcontact',[ContactController::class ,'create'])->name('contact.create');
Route::delete('/contact/delete/{id}', [AdminController::class, 'delete_contact'])->name('contact.destroy');


Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->name('about');
// ----------------------------------------------routes ---------------------------------------------------------

require __DIR__.'/auth.php';
require __DIR__.'/dashboard.php';
require __DIR__.'/shoppingcard.php';
