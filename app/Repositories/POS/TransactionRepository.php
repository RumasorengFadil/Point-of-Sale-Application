<?php

namespace App\Repositories\POS;

use App\Models\POS\Transaction;
use DB;

class TransactionRepository
{
    public function store(array $data): Transaction
    {
        return DB::transaction(function () use ($data) {
            return Transaction::create($this->mapData($data));
        });
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
            'status' => "selesai",
            'note' => $data['note'],
            'transaction_date' => now()->toDateString(),
        ];
        return $mappedData;
    }
}