<?php

namespace App\Repositories\POS;

use App\Models\POS\Transaction;
use DB;

class TransactionRepository
{
    private const DATA_SIZE = 250;
    public function index($size = self::DATA_SIZE)
    {
        return Transaction::with('details')->paginate($size);
    }
    public function store(array $data): Transaction
    {
        return DB::transaction(function () use ($data) {
            return Transaction::create($this->mapData($data));
        });
    }
    public function filter($startDate, $endDate, $type, $size = self::DATA_SIZE)
    {
        return Transaction::with('details')
            ->when($type !== 'default' && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                $query->whereBetween('created_at', [$startDate, $endDate]);
            })->paginate($size);
    }
    private function mapData(array $data): array
    {
        $mappedData = [
            'cashier_id' => $data['cashierId'],
            'user_id' => $data['userId'],
            'subtotal' => $data['subtotal'],
            'discount' => $data['discount'],
            'total' => $data['total'],
            'payment_method' => $data['paymentMethod'],
            'paid_amount' => $data['paidAmount'],
            'change' => $data['change'],
            'status' => "completed",
            'note' => $data['note'],
            'transaction_date' => now()->toDateString(),
        ];
        return $mappedData;
    }

    
}

