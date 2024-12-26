<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;

class UserProfileController extends Controller
{
    public function index(){

        return inertia()->render('Settings/UserProfile/UserProfile'); 
    }
    public function update(){

        return inertia()->render('Settings/UserProfile/UserProfile'); 
    }
}
