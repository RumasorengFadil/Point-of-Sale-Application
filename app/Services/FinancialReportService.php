<?php

namespace App\Services;

use App\Repositories\Accounting\CashFlowRepository;
use Carbon\CarbonImmutable;


class FinancialReportService
{
    protected $cashFlowRepository;

    public function __construct(CashFlowRepository $cashFlowRepository)
    {
        $this->cashFlowRepository = $cashFlowRepository;
    }

    /**
     * Get the financial report.
     *
     * @return array
     */
    public function getFinancialReport()
    {
        $incomeByCategory = $this->cashFlowRepository->getIncomeByCategory();
        $totalIncome = $this->cashFlowRepository->getTotalIncome();
        $expensesByCategory = $this->cashFlowRepository->getExpensesByCategory();
        $totalExpenses = $this->cashFlowRepository->getTotalExpenses();
        $initialCashBalance = $this->cashFlowRepository->getInitialCashBalance();

        return [
            'incomeReport' => [
                'incomeByCategory' => $incomeByCategory,
                'totalIncome' => $totalIncome,
                'expensesByCategory' => $expensesByCategory,
                'totalExpenses' => $totalExpenses,
                'netIncome' => $totalIncome - $totalExpenses,
            ],
            'cashReport' => [
                'cashInByCategory' => $incomeByCategory,
                'totalCashIn' => $totalIncome,
                'cashOutByCategory' => $expensesByCategory,
                'totalCashOut' => $totalExpenses,
                'netCash' => $totalIncome - $totalExpenses,
                'initialCashBalance' => $initialCashBalance,
                'finalCashBalance' => ($totalIncome - $totalExpenses) + $initialCashBalance,
            ],
        ];
    }
    public function filterFinancialReport(array $data): array
    {
        $startDate = CarbonImmutable::parse($data['startDate'])->startOfDay();
        $endDate = CarbonImmutable::parse($data['endDate'])->endOfDay();

        $incomeByCategory = $this->cashFlowRepository->getIncomeByCategory($startDate, $endDate, $data['type']);
        $totalIncome = $this->cashFlowRepository->getTotalIncome($startDate, $endDate, $data['type']);

        $expensesByCategory = $this->cashFlowRepository->getExpensesByCategory($startDate, $endDate, $data['type']);
        $totalExpenses = $this->cashFlowRepository->getTotalExpenses($startDate, $endDate, $data['type']);
        $initialCashBalance = $this->cashFlowRepository->getInitialCashBalance($startDate, $endDate, $data['type']);

        return [
            'incomeReport' => [
                'incomeByCategory' => $incomeByCategory,
                'totalIncome' => $totalIncome,
                'expensesByCategory' => $expensesByCategory,
                'totalExpenses' => $totalExpenses,
                'netIncome' => $totalIncome - $totalExpenses,
            ],
            'cashReport' => [
                'cashInByCategory' => $incomeByCategory,
                'totalCashIn' => $totalIncome,
                'cashOutByCategory' => $expensesByCategory,
                'totalCashOut' => $totalExpenses,
                'netCash' => $totalIncome - $totalExpenses,
                'initialCashBalance' => $initialCashBalance,
                'finalCashBalance' => ($totalIncome - $totalExpenses) + $initialCashBalance,
            ],
        ];
    }
}
