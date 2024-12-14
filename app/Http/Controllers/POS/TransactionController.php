<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\StoreTransactionRequest;
use App\Models\POS\MstProductCategory;
use App\Repositories\POS\MstProductCategoryRepository;
use App\Repositories\POS\ProductRepository;
use App\Services\PhotoService;
use App\Services\TransactionService;
use Auth;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    protected $productRepository;
    protected $mstProductCategoryRepository;
    protected $transactionService;
    public function __construct(ProductRepository $productRepository, MstProductCategoryRepository $mstProductCategoryRepository, TransactionService $transactionService)
    {
        $this->productRepository = $productRepository;
        $this->transactionService = $transactionService;
        $this->mstProductCategoryRepository = $mstProductCategoryRepository;
    }
    public function index()
    {
        $products = $this->productRepository->index();
        $categories = $this->mstProductCategoryRepository->index();

        return inertia()->render('POS/Transaction/Transaction', ['products' => $products, 'categories' => $categories]);
    }
    public function create()
    {
        $products = $this->productRepository->index();
        $categories = $this->mstProductCategoryRepository->index();

        return inertia()->render('POS/Transaction/CreateTransaction', ['products' => $products, 'categories' => $categories]);
    }
    public function store(StoreTransactionRequest $request)
    {
        try {
            // Melakukan validasi terhadap data product
            $validatedData = $request->validated();

            // Added transaction data and image path into database
            $transaction = $this->transactionService->store($validatedData);

            // Get User ID
            $userId = Auth::user()->id;

            // Save transaction data to the session
            session(["$userId.transaction" => $transaction]);

            return redirect()->route('transaction.success')
                ->with(['message' => __('message.success.stored', ['entity' => 'Transaction'])]);

        } catch (\Exception $e) {
            \Log::error('Failed to store transaction: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Transaction'])]);
        }

    }
    public function success()
    {
        try {
            // Get User ID
            $userId = Auth::user()->id;

            $transaction = session()->get("$userId.transaction");
            
            return inertia()->render('POS/Transaction/TransactionSuccess', ['transaction' => $transaction]);

        } catch (\Exception $e) {
            \Log::error('Failed to store transaction: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Transaction'])]);
        }

    }
}
