<?php

use App\Http\Controllers\Accounting\DashboardController;
use App\Http\Controllers\Accounting\JournalEntryController;
use App\Http\Controllers\Accounting\Settings\SettingsController;
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
Route::post('/accounting/journal-entry/store', [JournalEntryController::class, 'store'])->middleware(['auth', 'verified'])->name('accounting-journal-entry.store');
Route::get('/accounting/journal-entry/edit/{journalEntry}', [JournalEntryController::class, 'edit'])->middleware(['auth', 'verified'])->name('accounting-journal-entry.edit');
Route::get('/accounting/journal-entry/filter', [JournalEntryController::class, 'filter'])->middleware(['auth', 'verified'])->name('accounting-journal-entry.filter');
Route::post('/accounting/journal-entry/update/{journalEntry}', [JournalEntryController::class, 'update'])->middleware(['auth', 'verified'])->name('accounting-journal-entry.update');
Route::get('/accounting/settings', [SettingsController::class, 'index'])->middleware(['auth', 'verified'])->name('accounting.settings.index');