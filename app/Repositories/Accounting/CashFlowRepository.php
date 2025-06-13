<?php

namespace App\Repositories\Accounting;

use App\Models\Accounting\JournalEntry;

class CashFlowRepository
{
    private const DEFAULT_FILTER_TYPE = 'default';
    /**
     * Get income grouped by category.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getIncomeByCategory($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        return JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->join('mst_journal_categories', 'journal_entries.category_id', '=', 'mst_journal_categories.id')
            ->where('mst_types.type_name', '=', 'pemasukan')
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('journal_entries.created_at', [$startDate, $endDate]);
            })
            ->selectRaw('mst_journal_categories.category_name, SUM(journal_entries.nominal) as total_nominal')
            ->groupBy('mst_journal_categories.category_name')
            ->get();
    }

    /**
     * Get total income.
     *
     * @return int
     */
    public function getTotalIncome($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        return JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->join('mst_journal_categories', 'journal_entries.category_id', '=', 'mst_journal_categories.id')
            ->where('mst_types.type_name', '=', 'pemasukan')
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('journal_entries.created_at', [$startDate, $endDate]);
            })
            ->sum('nominal');
    }

    /**
     * Get expenses grouped by category.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getExpensesByCategory($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        return JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->join('mst_journal_categories', 'journal_entries.category_id', '=', 'mst_journal_categories.id')
            ->where('mst_types.type_name', '=', 'pengeluaran')
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('journal_entries.created_at', [$startDate, $endDate]);
            })
            ->selectRaw('mst_journal_categories.category_name, SUM(journal_entries.nominal) as total_nominal')
            ->groupBy('mst_journal_categories.category_name')
            ->get();
    }

    /**
     * Get total expenses.
     *
     * @return int
     */
    public function getTotalExpenses($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        return JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->join('mst_journal_categories', 'journal_entries.category_id', '=', 'mst_journal_categories.id')
            ->where('mst_types.type_name', '=', 'pengeluaran')
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('journal_entries.created_at', [$startDate, $endDate]);
            })
            ->sum('nominal');
    }

    /**
     * Get initial cash balance.
     *
     * @return int
     */
    public function getInitialCashBalance($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        return JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->where(function ($query) use ($startDate, $type) {
                if ($type !== self::DEFAULT_FILTER_TYPE) {
                    $query->where('journal_entries.created_at', "<", $startDate);
                }
            })
            ->selectRaw("
                CASE
                    WHEN ? = ? THEN 0
                    ELSE COALESCE(
                        SUM(CASE WHEN mst_types.type_name = 'pemasukan' THEN journal_entries.nominal ELSE 0 END) -
                        SUM(CASE WHEN mst_types.type_name = 'pengeluaran' THEN journal_entries.nominal ELSE 0 END),
                        0
                    )
                END AS initial_cash_balance
            ", [$type, self::DEFAULT_FILTER_TYPE])
            ->value('initial_cash_balance');
    }

    public function getWeeklyTransactionSummary($type = "pemasukan")
    {
        // Default nama hari
        $days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

        $startDate = now()->startOfWeek()->toDateString(); // Senin
        $endDate = now()->endOfWeek()->toDateString(); // Minggu

        // Query untuk menghitung total pendapatan per hari
        $result = JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->selectRaw('DAYOFWEEK(journal_entries.input_date) as day_of_week, SUM(journal_entries.nominal) as total_income')
            ->where('mst_types.type_name', '=', $type)
            ->whereBetween('journal_entries.input_date', [$startDate, $endDate])
            ->groupByRaw('DAYOFWEEK(journal_entries.input_date)')
            ->get()
            ->pluck('total_income', 'day_of_week')
            ->toArray();

        // Format hasil menjadi array sesuai struktur yang diinginkan
        $transactionSummary = [
            'labels' => $days,
            'transactions' => array_map(function ($day) use ($result) {
                return $result[$day] ?? 0; // Default 0 jika tidak ada data
            }, range(1, 7)),
            'label' => $type
        ];
        return $transactionSummary;
    }
    public function getWeeklyNetIncomeSummary()
    {
        // Default nama hari
        $days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

        $startDate = now()->startOfWeek()->toDateString(); // Senin
        $endDate = now()->endOfWeek()->toDateString(); // Minggu

        // Query untuk menghitung total pemasukan per hari
        $incomeResult = JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->selectRaw('DAYOFWEEK(journal_entries.input_date) as day_of_week, SUM(journal_entries.nominal) as total_income')
            ->where('mst_types.type_name', '=', 'pemasukan')
            ->whereBetween('journal_entries.input_date', [$startDate, $endDate])
            ->groupByRaw('DAYOFWEEK(journal_entries.input_date)')
            ->get()
            ->pluck('total_income', 'day_of_week')
            ->toArray();

        // Query untuk menghitung total pengeluaran per hari
        $expenseResult = JournalEntry::join('mst_types', 'journal_entries.type_id', '=', 'mst_types.id')
            ->selectRaw('DAYOFWEEK(journal_entries.input_date) as day_of_week, SUM(journal_entries.nominal) as total_expense')
            ->where('mst_types.type_name', '=', 'pengeluaran')
            ->whereBetween('journal_entries.input_date', [$startDate, $endDate])
            ->groupByRaw('DAYOFWEEK(journal_entries.input_date)')
            ->get()
            ->pluck('total_expense', 'day_of_week')
            ->toArray();

        // Hitung pendapatan bersih per hari (pemasukan - pengeluaran)
        $netIncome = [];
        foreach (range(1, 7) as $day) { // 1 = Minggu, 7 = Sabtu
            $income = $incomeResult[$day] ?? 0; // Default 0 jika tidak ada pemasukan
            $expense = $expenseResult[$day] ?? 0; // Default 0 jika tidak ada pengeluaran
            $netIncome[] = $income - $expense; // Selisih pemasukan dan pengeluaran
        }

        // Format hasil menjadi array sesuai struktur yang diinginkan
        $transactionSummary = [
            'labels' => $days,
            'transactions' => $netIncome,
            'label' => 'Pendapatan Bersih'
        ];

        return $transactionSummary;
    }
}