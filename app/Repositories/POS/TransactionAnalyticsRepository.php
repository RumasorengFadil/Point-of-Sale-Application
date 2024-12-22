<?php

namespace App\Repositories\POS;

use App\Models\POS\Transaction;
use DB;

class TransactionAnalyticsRepository
{
    public function calculateTotalRevenue(): float
    {
        return Transaction::sum('total');
    }

    public function calculateTotalOrders(): int
    {
        return Transaction::count();
    }

    public function getMostPopularProduct()
    {
        return Transaction::join('transaction_details', 'transactions.id', '=', 'transaction_details.transaction_id')
            ->select('product_name', DB::raw('SUM(quantity) as total_quantity'))
            ->groupBy('product_name')
            ->orderByDesc('total_quantity')
            ->first();
    }
    public function getMostPopularFood()
    {
        return Transaction::join('transaction_details', 'transactions.id', '=', 'transaction_details.transaction_id')
            ->join('products', 'transaction_details.product_id', '=', 'products.id')
            ->join('mst_product_categories', 'products.category_id', '=', 'mst_product_categories.id')
            ->where('mst_product_categories.category_name', 'makanan')
            ->select('product_name', DB::raw('SUM(quantity) as total_quantity'))
            ->groupBy('product_name')
            ->orderByDesc('total_quantity')
            ->first();
    }

    public function getMostPopularDrink()
    {
        return Transaction::join('transaction_details', 'transactions.id', '=', 'transaction_details.transaction_id')
            ->join('products', 'transaction_details.product_id', '=', 'products.id')
            ->join('mst_product_categories', 'products.category_id', '=', 'mst_product_categories.id')
            ->where('mst_product_categories.category_name', 'minuman') // Tentukan tabel untuk kolom category_name
            ->select('product_name', DB::raw('SUM(quantity) as total_quantity'))
            ->groupBy('product_name')
            ->orderByDesc('total_quantity')
            ->first();
    }

    public function getTotalRevenueByDateRange($startDate, $endDate): float
    {
        return Transaction::whereBetween('created_at', [$startDate, $endDate])
            ->sum('total');
    }

    public function getTotalOrdersByDateRange($startDate, $endDate): int
    {
        return Transaction::whereBetween('created_at', [$startDate, $endDate])
            ->count();
    }

    public function getMostPopularProductByDateRange($startDate, $endDate)
    {
        return Transaction::join('transaction_details', 'transactions.id', '=', 'transaction_details.transaction_id')
            ->whereBetween('transactions.created_at', [$startDate, $endDate])
            ->select('product_name', DB::raw('SUM(quantity) as total_quantity'))
            ->groupBy('product_name')
            ->orderByDesc('total_quantity')
            ->first();
    }

    public function getMostPopularDrinkByDateRange($startDate, $endDate)
    {
        return Transaction::join('transaction_details', 'transactions.id', '=', 'transaction_details.transaction_id')
            ->whereBetween('transactions.created_at', [$startDate, $endDate])
            ->where('category', 'minuman') // Sesuaikan kategori untuk minuman
            ->select('product_name', DB::raw('SUM(quantity) as total_quantity'))
            ->groupBy('product_name')
            ->orderByDesc('total_quantity')
            ->first();
    }
}