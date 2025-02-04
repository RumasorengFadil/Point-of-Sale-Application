<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\TransactionFilterRequest;
use App\Services\TransactionReportService;

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
        return inertia()->render('POS/Dashboard', [
            'analytics' => $analytics,
            'filterParams' => [
                'startDate' => $validatedData['startDate'], // The parsed and adjusted start date
                'endDate' => $validatedData['endDate'],     // The parsed and adjusted end date
                'type' => $validatedData['type'],    // The filter type from the input data,
            ],
        ]);
    }
}
