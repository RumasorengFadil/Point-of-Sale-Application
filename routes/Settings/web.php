<?php

use App\Http\Controllers\POS\DashboardController;
use App\Http\Controllers\POS\ProductController;
use App\Http\Controllers\POS\TransactionController;
use App\Http\Controllers\POS\TransactionReportController;
use App\Http\Controllers\Settings\UserAccountsController;
use App\Http\Controllers\Settings\UserProfileController;
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

Route::get('settings/user-profile', [UserProfileController::class, 'index'])->middleware(['auth', 'verified'])->name('settings.user-profile.index');
Route::post('settings/user-profile/update', [UserProfileController::class, 'update'])->middleware(['auth', 'verified'])->name('settings.user-profile.update');