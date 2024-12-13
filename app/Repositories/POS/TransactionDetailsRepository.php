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
            $insertData = [];
            foreach ($data['products'] as $product) {
                $insertData[] = [
                    'transaction_id' => $data['transactionId'],
                    'product_id' => $product['id'],
                    'product_name' => $product['name'],
                    'quantity' => $product['quantity'],
                    'unit_price' => $product['unitPrice'],
                    'discount_amount' => $product['discountAmount'],
                    'discount_percentage' => $product['discountPercentage'],
                ];
            }
            TransactionDetails::insert($insertData);
        }); 
    }
}