<?php

namespace App\Repositories\POS;

use App\Models\POS\Product;
use App\Models\POS\Transaction;
use App\Models\POS\TransactionDetails;
use DB;

class TransactionDetailsRepository
{
    public function store(array $data)
    {
        DB::transaction(function () use ($data) {
            foreach ($data['cartDetails'] as $cartDetail) {
                TransactionDetails::create([
                    'transaction_id' => $data['transactionId'],
                    'product_id' => $cartDetail['id'],
                    'product_name' => $cartDetail['name'],
                    'quantity' => $cartDetail['quantity'],
                    'unit_price' => $cartDetail['unitPrice'],
                    'category_name' => $cartDetail['categoryName'],
                    'discount_amount' => $cartDetail['discountAmount'],
                    'discount_percentage' => $cartDetail['discountPercentage'],
                ]);
            }
        });
    }
}