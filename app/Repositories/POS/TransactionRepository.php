<?php

namespace App\Repositories\POS;

use App\Models\POS\Product;
use App\Models\POS\Transaction;

class TransactionRepository
{
    public function store(array $data): Product
    {

        return Transaction::create($this->mapData($data));
    }

    private function mapData(array $data): array
    {
        $mappedData = [
            'cashier_id' => $data['cashierId'],
            'user_id' => $data['userId'],
            'subtotal' => $data['subtotal'],
            'discount' => $data['discount'],
            'tax' => $data['tax'],
            'payment_method' => $data['paymentMethod'],
            'paid_amount' => $data['paidAmount'],
            'change' => $data['change'],
            'status' => $data['status'],
            'note' => $data['note'],
            'transaction_date' => now()->toDateString(),
        ];

        return $mappedData;
    }
}