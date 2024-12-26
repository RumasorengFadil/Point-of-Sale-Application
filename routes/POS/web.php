<?php

use App\Http\Controllers\POS\DashboardController;
use App\Http\Controllers\POS\ProductController;
use App\Http\Controllers\POS\TransactionController;
use App\Http\Controllers\POS\TransactionReportController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/pos/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('pos-dashboard.index');
Route::get('/pos/dashboard/filter', [DashboardController::class, 'filter'])->middleware(['auth', 'verified'])->name('pos-dashboard.filter');

Route::get('/pos/product', [ProductController::class, 'index'])->middleware(['auth', 'verified'])->name('product.index');
Route::get('/pos/product/create', [ProductController::class, 'create'])->middleware(['auth', 'verified'])->name('product.create');
Route::post('/pos/product/store', [ProductController::class, 'store'])->middleware(['auth', 'verified'])->name('product.store');
Route::get('/pos/product/edit/{id}', [ProductController::class, 'edit'])->middleware(['auth', 'verified'])->name('product.edit');
Route::post('/pos/product/update/{id}', [ProductController::class, 'update'])->middleware(['auth', 'verified'])->name('product.update');
Route::delete('/pos/product/destroy/{id}', [ProductController::class, 'destroy'])->middleware(['auth', 'verified'])->name('product.destroy');

Route::get('pos/transaction', [TransactionController::class, 'index'])->middleware(['auth', 'verified'])->name('transaction.index');
Route::get('pos/transaction/create', [TransactionController::class, 'create'])->middleware(['auth', 'verified'])->name('transaction.create');
Route::post('pos/transaction/store', [TransactionController::class, 'store'])->middleware(['auth', 'verified'])->name('transaction.store');
Route::get('pos/transaction/success', [TransactionController::class, 'success'])
    ->middleware(['auth', 'verified'])
    ->name('transaction.success');

Route::get('pos/transaction-report', [TransactionReportController::class, 'index'])->middleware(['auth', 'verified'])->name('transaction-report.index');
Route::get('pos/transaction-report/filter', [TransactionReportController::class, 'filter'])->middleware(['auth', 'verified'])->name('transaction-report.filter');