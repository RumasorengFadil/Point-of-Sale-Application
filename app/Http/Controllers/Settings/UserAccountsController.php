<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserAccountsController extends Controller
{
    public function index(){

        return inertia()->render('Settings/UserAccounts/UserAccounts'); 
    }
}
