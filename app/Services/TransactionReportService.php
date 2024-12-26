<?php

namespace App\Services;

use App\Repositories\POS\TransactionAnalyticsRepository;
use App\Repositories\POS\TransactionRepository;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;
class TransactionReportService
{
    private const CATEGORY_FOOD_NAME = 'makanan';
    private const CATEGORY_DRINK_NAME = 'minuman';
    protected $analyticsRepository;
    protected $transactionRepository;
    protected $paginationService;

    public function __construct(
        TransactionAnalyticsRepository $analyticsRepository,
        TransactionRepository $transactionRepository,
        PaginationService $paginationService
    ) {
        $this->analyticsRepository = $analyticsRepository;
        $this->transactionRepository = $transactionRepository;
        $this->paginationService = $paginationService;
    }

    public function getTransactions(): array
    {
        $transactionData = $this->transactionRepository->index();

        // Modifikasi pagination
        $pagination = $transactionData->toArray();

        // Buat custom labels untuk pagination
        $pagination['links'] = $this->paginationService->formatPaginationLinks($transactionData);

        return [
            'transactionData' => $pagination, // Mengganti 'transactions' menjadi 'data' agar lebih generik
            'type' => "default"
        ];
    }
    public function getAnalytics(): array
    {
        $analyticsData = [
            'totalRevenue' => $this->analyticsRepository->getTotalRevenue(),
            'totalOrders' => $this->analyticsRepository->getTotalOrders(),
            'mostPopularFood' => $this->analyticsRepository->getMostPopularProduct(self::CATEGORY_FOOD_NAME),
            'mostPopularDrink' => $this->analyticsRepository->getMostPopularProduct(self::CATEGORY_DRINK_NAME),
            'totalByCategory' => $this->analyticsRepository->getTotalByCategory(),
            'foodSalesSummary' => $this->analyticsRepository->getSalesSummary(self::CATEGORY_FOOD_NAME),
            'drinkSalesSummary' => $this->analyticsRepository->getSalesSummary(self::CATEGORY_DRINK_NAME),
            'dateRange' => 'Semua',
            'type' => 'default',
        ];
        return $analyticsData;
    }

    public function filterAnalytics(array $data): array
    {
        $startDate = CarbonImmutable::parse($data['startDate'])->startOfDay();
        $endDate = CarbonImmutable::parse($data['endDate'])->endOfDay();

        $analyticsData = [
            'totalRevenue' => $this->analyticsRepository->getTotalRevenue($startDate, $endDate, $data['type']),
            'totalOrders' => $this->analyticsRepository->getTotalOrders($startDate, $endDate, $data['type']),
            'mostPopularFood' => $this->analyticsRepository->getMostPopularProduct(self::CATEGORY_FOOD_NAME, $startDate, $endDate, $data['type']),
            'mostPopularDrink' => $this->analyticsRepository->getMostPopularProduct(self::CATEGORY_DRINK_NAME, $startDate, $endDate, $data['type']),
            'totalByCategory' => $this->analyticsRepository->getTotalByCategory($startDate, $endDate, $data['type']),
            'foodSalesSummary' => $this->analyticsRepository->getSalesSummary(self::CATEGORY_FOOD_NAME, $startDate, $endDate, $data['type']),
            'drinkSalesSummary' => $this->analyticsRepository->getSalesSummary(self::CATEGORY_DRINK_NAME, $startDate, $endDate, $data['type']),
            'startDate' => $data['startDate'],
            'endDate' => $data['endDate'],
            'type' => $data['type']
        ];

        return $analyticsData;
    }
    public function filterTransactions(array $data): array|Collection
    {
        $startDate = CarbonImmutable::parse($data['startDate'])->startOfDay();
        $endDate = CarbonImmutable::parse($data['endDate'])->endOfDay();

        $transactionData = $this->transactionRepository->filter($startDate, $endDate, $data['type']);

        // Modifikasi pagination
        $pagination = $transactionData->toArray();

        // Buat custom labels untuk pagination
        $pagination['links'] = $this->paginationService->formatPaginationLinks($transactionData);
        return [
            'transactionData' => $pagination,
            'startDate' => $data['startDate'],
            'endDate' => $data['endDate'],
            'type' => $data['type']
        ];
    }
}
