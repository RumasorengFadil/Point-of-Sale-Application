<?php

namespace App\Repositories\POS;

use App\Models\POS\TransactionDetails;
use DB;

class TransactionAnalyticsRepository
{
    private const LIMIT_SIZE = 7;
    private const DEFAULT_FILTER_TYPE = 'default';

    public function getTotalOrders($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE): int
    {
        return DB::table('transactions')
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('created_at', [$startDate, $endDate]);
            })
            ->count();
    }

    public function getTotalRevenue($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE): float
    {
        return DB::table('transactions')
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('created_at', [$startDate, $endDate]);
            })
            ->sum('total');
    }

    public function getMostPopularProduct($category = null, $startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        return TransactionDetails::where('category_name', $category)
            ->select('product_name', DB::raw('SUM(quantity) as total_quantity'))
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('created_at', [$startDate, $endDate]);
            })
            ->groupBy('product_name')
            ->orderByDesc('total_quantity')
            ->first();
    }

    public function getTotalByCategory($startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        return DB::table('transaction_details')
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('created_at', [$startDate, $endDate]);
            })
            ->select(
                'category_name',
                DB::raw('SUM(quantity) AS total_product_sold'),
                DB::raw('SUM(quantity * unit_price - discount_amount) AS total_revenue')
            )
            ->groupBy('category_name')
            ->get();
    }

    public function getSalesSummary($category, $startDate = null, $endDate = null, $type = self::DEFAULT_FILTER_TYPE)
    {
        $result = TransactionDetails::select(
            'category_name',
            'product_name',
            DB::raw('SUM(transaction_details.quantity) as total_product_sold')
        )
            ->when($type !== self::DEFAULT_FILTER_TYPE && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                return $query->whereBetween('created_at', [$startDate, $endDate]);
            })
            ->where('category_name', $category)
            ->groupBy('product_name', 'category_name')
            ->orderByDesc('total_product_sold')  // Lebih deskriptif
            ->limit(self::LIMIT_SIZE)
            ->get();

        return [
            'product_name' => $result->pluck('product_name')->toArray(),
            'total_product_sold' => $result->pluck('total_product_sold')->toArray(),
            'category_name' => $category
        ];
    }
}