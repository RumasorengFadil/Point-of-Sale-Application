<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\TransactionFilterRequest;
use App\Repositories\POS\TransactionAnalyticsRepository;
use App\Repositories\POS\TransactionRepository;
use App\Services\TransactionReportService;

class TransactionReportController extends Controller
{
    protected $transactionRepository;
    protected $analyticsRepository;
    protected $transactionReportService;
    public function __construct(TransactionRepository $transactionRepository, TransactionAnalyticsRepository $analyticsRepository, TransactionReportService $transactionReportService)
    {
        $this->transactionRepository = $transactionRepository;
        $this->analyticsRepository = $analyticsRepository;
        $this->transactionReportService = $transactionReportService;
    }
    public function index()
    {
        //Default Data
        $data = [
            'startDate' => now()->startOfMonth()->toDateString(),
            'endDate' => now()->endOfMonth()->toDateString(),
            'type' => 'thisMonth',
            'month' => now()->format('F')
        ];

        $transactionReport = $this->transactionReportService->filterTransactions($data);

        $analytics = $this->transactionReportService->filterAnalytics($data);

        return inertia()->render('POS/Report/TransactionReport', [
            'transactionReport' => $transactionReport,
            'analytics' => $analytics,
            'filterParams' => [
                'startDate' => $data['startDate'], // The parsed and adjusted start date
                'endDate' => $data['endDate'],     // The parsed and adjusted end date
                'type' => $data['type'],    // The filter type from the input data
                'month' => $data['month'],
            ],
        ]);
    }

    public function filter(TransactionFilterRequest $request)
    {
        $validatedData = $request->validated();
        $transactionReport = $this->transactionReportService->filterTransactions($validatedData);
        $analytics = $this->transactionReportService->filterAnalytics($validatedData);
        return inertia()->render('POS/Report/TransactionReport', [
            'transactionReport' => $transactionReport,
            'analytics' => $analytics,
            'filterParams' => [
                'startDate' => $validatedData['startDate'], // The parsed and adjusted start date
                'endDate' => $validatedData['endDate'],     // The parsed and adjusted end date
                'type' => $validatedData['type'],    // The filter type from the input data
                'month' => $validatedData['month']
            ],
        ]);
    }
}
