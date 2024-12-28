<?php

use App\Http\Controllers\Accounting\DashboardController;
use Illuminate\Support\Facades\Route;

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

Route::get('/accounting/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('accounting.dashboard.index');