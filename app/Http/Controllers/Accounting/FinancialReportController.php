<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FinancialReportController extends Controller
{
    public function index(){
        return inertia()->render('Accounting/Report/FinancialReport');
    }
}
