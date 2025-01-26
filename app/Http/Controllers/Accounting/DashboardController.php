<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\TransactionFilterRequest;
use App\Services\FinancialReportService;

class DashboardController extends Controller
{
    protected $financialReportService;
    public function __construct(FinancialReportService $financialReportService)
    {
        $this->financialReportService = $financialReportService;
    }
    public function index()
    {
        $financialReport = $this->financialReportService->getFinancialReport();
        return inertia()->render('Accounting/Dashboard', ['financialReport' => $financialReport]);
    }
    public function filter(TransactionFilterRequest $request)
    {
        // $validatedData = $request->validated();

        // $analytics = $this->transactionReportService->filterAnalytics($validatedData);
        // return inertia()->render('POS/Dashboard', ['analytics' => $analytics]);
    }
}
