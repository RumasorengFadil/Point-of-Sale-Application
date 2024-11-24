<?php

namespace App\Repositories\POS;

use App\Models\POS\Product;
use App\Models\POS\Transaction;
use App\Models\POS\TransactionDetails;
use DB;

class TransactionDetailsRepository
{
    public function store(array $data): Product
    {
        DB::transaction(function () use ($data) {
            $insertData = [];
            foreach ($data['products'] as $product) {
                $insertData[] = [
                    'transaction_id' => $data['transactionId'],
                    'product_id' => $product['productId'],
                    'product_name' => $product['name'],
                    'quantity' => $product['quantity'],
                    'unit_price' => $product['unitPrice'],
                    'sub_total' => $product['subTotal'],
                ];
            }
            TransactionDetails::insert($insertData);
        }); 
    }
    private function mapData(array $data): array
    {
        $mappedData = [
            'transactionId' => $data['cashierId'],
            'subtotal' => $data['subtotal'],
            'discount' => $data['discount'],
            'tax' => $data['tax'],
            'payment_method' => $data['paymentMethod'],
            'paid_amount' => $data['paidAmount'],
            'change' => $data['change'],
            'status' => $data['status'],
            'note' => $data['note'],
            'transaction_date' => $data['transactionDate'],
        ];

        return $mappedData;
    }
}