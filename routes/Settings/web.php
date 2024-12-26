<?php

use App\Http\Controllers\POS\DashboardController;
use App\Http\Controllers\POS\ProductController;
use App\Http\Controllers\POS\TransactionController;
use App\Http\Controllers\POS\TransactionReportController;
use App\Http\Controllers\Settings\UserAccountsController;
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

Route::get('settings/user-accounts', [UserAccountsController::class, 'index'])->middleware(['auth', 'verified'])->name('settings.user-accounts.index');