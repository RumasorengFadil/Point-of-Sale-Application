<?php

use App\Http\Controllers\Accounting\DashboardController;
use App\Http\Controllers\Accounting\JournalEntryController;
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

Route::get('/accounting/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('accounting-dashboard.index');
Route::get('/accounting/journal-entry', [JournalEntryController::class, 'index'])->middleware(['auth', 'verified'])->name('accounting-journal-entry.index');
Route::get('/accounting/journal-entry/create', [JournalEntryController::class, 'create'])->middleware(['auth', 'verified'])->name('accounting-journal-entry.create');