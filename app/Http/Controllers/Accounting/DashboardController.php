<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\TransactionFilterRequest;
use App\Repositories\Accounting\JournalEntryRepository;
use App\Services\FinancialReportService;
use App\Services\JournalEntryService;

class DashboardController extends Controller
{
    protected $financialReportService;
    protected $journalEntryService;
    public function __construct(FinancialReportService $financialReportService, JournalEntryService $journalEntryService)
    {
        $this->financialReportService = $financialReportService;
        $this->journalEntryService = $journalEntryService;
    }
    public function index()
    {
        $financialReport = $this->financialReportService->getFinancialReport();
        $journalEntries = $this->journalEntryService->getJournalEntries()->items();
        usort($journalEntries, function ($a, $b) {
            return $b['id'] <=> $a['id']; // Urutkan secara descending berdasarkan 'id'
        });

        return inertia()->render('Accounting/Dashboard', ['financialReport' => $financialReport, 'journalEntries' => $journalEntries]);
    }
    public function filter(TransactionFilterRequest $request)
    {
        // $validatedData = $request->validated();

        // $analytics = $this->transactionReportService->filterAnalytics($validatedData);
        // return inertia()->render('POS/Dashboard', ['analytics' => $analytics]);
    }
}
