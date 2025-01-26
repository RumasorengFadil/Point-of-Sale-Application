<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\Http\Requests\Accounting\FinancialReportRequest;
use App\Http\Requests\Accounting\JournalEntryFilterRequest;
use App\Models\Accounting\JournalEntry;
use App\Repositories\Accounting\CashFlowRepository;
use App\Services\FinancialReportService;

class FinancialReportController extends Controller
{
    protected $financialReportService;
    public function __construct(FinancialReportService $financialReportService)
    {
        $this->financialReportService = $financialReportService;
    }
    public function index()
    {
        $financialReport = $this->financialReportService->getFinancialReport();
        return inertia()->render(
            'Accounting/Report/FinancialReport',
            ['financialReport' => $financialReport,]
        );
    }

    public function filter(FinancialReportRequest $request)
    {
        $validatedData = $request->validated();

        $financialReport = $this->financialReportService->filterFinancialReport($validatedData);

        return inertia()->render(
            'Accounting/Report/FinancialReport',
            [
                'financialReport' => $financialReport,
                'filterParams' => [
                    'startDate' => $validatedData['startDate'], // The parsed and adjusted start date
                    'endDate' => $validatedData['endDate'],     // The parsed and adjusted end date
                    'type' => $validatedData['type'],    // The filter type from the input data,
                    'month' => $validatedData['month']
                ],
            ],
        );
    }
}
