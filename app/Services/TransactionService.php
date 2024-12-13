<?php

namespace App\Services;

use App\Models\Product\Product;
use App\Repositories\POS\TransactionDetailsRepository;
use App\Repositories\POS\TransactionRepository;
use App\Repositories\Product\ProductRepository;
use DB;
use Exception;
use Log;
use Storage;

class TransactionService
{
    protected $transactionRepository;
    protected $transactionDetailsRepository;
    public function __construct(TransactionRepository $transactionRepository, TransactionDetailsRepository $transactionDetailsRepository)
    {
        $this->transactionRepository = $transactionRepository;
        $this->transactionDetailsRepository = $transactionDetailsRepository;
    }

    public function store($transaction)
    {
        try {
            return DB::transaction(function () use ($transaction) {
                // Create Transaction entry and retrieve the create Transaction object
                $createdTransaction = $this->transactionRepository->store($transaction);

                // Create Transaction Details entry
                $this->transactionDetailsRepository->store($transaction->cartDetails + [
                    'transactionId' => $createdTransaction->id,
                ]);

                return $createdTransaction;
            });
        } catch (Exception $e) {
            // Log the error for debugging
            Log::error('Failed to create transaction with relations: ' . $e->getMessage());
            // Handle error (return a custom exception or a specific response)
            throw new Exception("Failed to create transaction", 0, $e);
        }

    }
}

