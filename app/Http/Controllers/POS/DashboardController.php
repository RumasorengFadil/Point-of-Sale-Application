<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\TransactionFilterRequest;
use App\Services\TransactionReportService;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    protected $transactionReportService;
    public function __construct(TransactionReportService $transactionReportService)
    {
        $this->transactionReportService = $transactionReportService;
    }
    public function index()
    {        
        $analytics = $this->transactionReportService->getAnalytics();
        return inertia()->render('POS/Dashboard', ['analytics' => $analytics]);
    }
    public function filter(TransactionFilterRequest $request)
    {        
        $validatedData = $request->validated();

        $analytics = $this->transactionReportService->filterAnalytics($validatedData);
        return inertia()->render('POS/Dashboard', ['analytics' => $analytics]);
    }
}
