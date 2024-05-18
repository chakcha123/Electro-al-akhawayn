<?php

use App\Http\Controllers\AdminController;


Route::middleware(['auth', 'admin', 'verified'])->group(function () {

    Route::get('/productsdashboard', [AdminController::class, 'ProductsIndex'])->name('dashboard.products');
    Route::get('/servicesdashboard', [AdminController::class, 'ServicesIndex'])->name('dashboard.services');
    Route::get('/contactsdashboard', [AdminController::class, 'ContactsIndex'])->name('dashboard.contacts');

    Route::get('/serviceManagement', [AdminController::class, 'ServiceManagement'])->name('ServiceManagement');
    Route::get('/productManagement', [AdminController::class, 'ProductManagement'])->name('ProductManagement');

    Route::post('services/create', [AdminController::class, 'create_service'])->name('services.create');
    Route::post('products/create', [AdminController::class, 'create_product'])->name('products.create');

    Route::delete('/service/delete/{id}', [AdminController::class, 'delete_service'])->name('service.destroy');
    Route::delete('/product/delete/{id}', [AdminController::class, 'delete_product'])->name('product.destroy');
    Route::delete('/contact/delete/{id}', [AdminController::class, 'delete_contact'])->name('contact.destroy');

    Route::get('/service/{id}/edit', [AdminController::class, 'edit_service'])->name('service.edit');
    Route::put('/service/{id}', [AdminController::class, 'update_service'])->name('service.update');

    Route::get('/product/{id}/edit', [AdminController::class, 'edit_product'])->name('product.edit');
    Route::post('/product', [AdminController::class, 'update_product'])->name('product.update');
});
