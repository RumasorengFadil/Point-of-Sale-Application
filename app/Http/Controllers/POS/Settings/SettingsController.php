<?php

namespace App\Http\Controllers\POS\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index(){
        return inertia()->render('POS/Settings/Settings'); 
    }
}
