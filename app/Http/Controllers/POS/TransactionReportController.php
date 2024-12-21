<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use App\Models\POS\Transaction;
use App\Repositories\POS\TransactionRepository;
use Illuminate\Http\Request;

class TransactionReportController extends Controller
{
    protected $transactionRepository;
    public function __construct(TransactionRepository $transactionRepository)
    {
        $this->transactionRepository = $transactionRepository;
    }
    public function index()
    {
        $transactions = $this->transactionRepository->index();
        return inertia()->render('POS/Report/TransactionReport', ['transaction' => $transactions]);
    }

}
