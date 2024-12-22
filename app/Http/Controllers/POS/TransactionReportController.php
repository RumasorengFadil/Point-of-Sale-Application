<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use App\Repositories\POS\TransactionAnalyticsRepository;
use App\Repositories\POS\TransactionRepository;

class TransactionReportController extends Controller
{
    protected $transactionRepository;
    protected $analyticsRepository;
    public function __construct(TransactionRepository $transactionRepository, TransactionAnalyticsRepository $analyticsRepository)
    {
        $this->transactionRepository = $transactionRepository;
        $this->analyticsRepository = $analyticsRepository;
    }
    public function index()
    {
        $transactions = $this->transactionRepository->index();
        $totalRevenue = $this->analyticsRepository->calculateTotalRevenue();
        $totalOrders = $this->analyticsRepository->calculateTotalOrders();
        $mostPopularFood = $this->analyticsRepository->getMostPopularFood();
        $mostPopularDrink = $this->analyticsRepository->getMostPopularDrink();
        return inertia()->render('POS/Report/TransactionReport', [
            'transaction' => $transactions,
            'analytics' => [
                'totalRevenue' => $totalRevenue,
                'totalOrders' => $totalOrders,
                'mostPopularFood' => $mostPopularFood,
                'mostPopularDrink' => $mostPopularDrink,
                'dateRange' => 'semua'
            ]
        ]);
    }
}
