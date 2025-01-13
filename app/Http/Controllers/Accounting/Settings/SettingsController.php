<?php

namespace App\Http\Controllers\Accounting\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index(){
        return inertia()->render('Accounting/Settings/Settings'); 
    }
}
