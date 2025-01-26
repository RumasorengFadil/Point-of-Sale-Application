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

}