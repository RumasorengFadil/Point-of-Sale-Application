<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\Http\Requests\Accounting\StoreJournalEntryRequest;
use App\Repositories\Accounting\JournalEntryRepository;
use App\Services\PhotoService;
use Illuminate\Http\Request;

class JournalEntryController extends Controller
{
    protected $journalEntryRepository;
    protected $photoService;
    public function __construct(JournalEntryRepository $journalEntryRepository, PhotoService $photoService){
        $this->journalEntryRepository = $journalEntryRepository;
        $this->photoService = $photoService;
    }   
    public function index()
    {
        $products = $this->journalEntryRepository->index();


        return inertia()->render('Accounting/JournalEntry', ['products' => $products]);
    }
    public function create()
    {
        return inertia()->render('Product/CreateJournalEntry');
    }
    public function store(StoreJournalEntryRequest $request)
    {
        try {
            // Melakukan validasi terhadap data product
            $validatedData = $request->validated();

            // Handle Photo Product
            $validatedData['evidence'] = $this->photoService->handlePhoto($validatedData['evidence'], 'evidence', null);

            // Added product data and image path into database
            $this->journalEntryRepository->store($validatedData);

            return redirect()->route('journal-entry.create')
                ->with(['message' => __('message.success.stored', ['entity' => 'Product'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to store product: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Product'])]);
        }

    }
    public function edit(Product $product)
    {
        $product = $this->productService->mapProduct($product->getAttributes());
        return inertia()->render('Product/EditProduct', ['product' => $product]);
    }
    public function update($product, UpdateProductRequest $request)
    {

        try {
            // Validate product data
            $validatedData = $request->validated();

            // Handle Photo Product
            $image = $this->photoService->handleUpdatePhoto($validatedData['image'], $product['image'], 'product');
            
            // Sets the image to the old path when the image variable is null 
            $validatedData['image'] = $image !== null ? $image : $product['image'];

            // Added product data and image path into database
            $this->productRepository->update($validatedData + ['image' => $image], $product);

            return redirect()->back()
                ->with(['message' => __('message.success.updated', ['entity' => 'Product'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to store product: ' . $e->getMessage());

            return redirect()->back()->withErrors(['error' => __('message.error.updated', ['entity' => 'Product'])]);
        }

    }

    public function destroy($product)
    {
        try {
            // Remove product photo
            $this->photoService->removePhoto($product->image, 'product');
            
            // Destroy the product
            $this->productRepository->destroy($product);

            return redirect()->back()
                ->with(['message' => __('message.success.destroyed', ['entity' => 'Product'])]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Failed to destroy product: ' . $e->getMessage());
            // Redirect back with error message
            redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Product'])]);
        }
    }
    public function destroys(DestroysProductRequest $request)
    {
        //
        try {
            // Validated data products
            $validatedData = $request->validated();

            // Destroys the products
            $this->productService->destroys($validatedData['selectedProductIds']);

            return redirect()->back()
                ->with(['message' => __('message.success.destroyed', ['entity' => 'Product'])]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Failed to destroy product: ' . $e->getMessage());
            // Redirect back with error message
            redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Product'])]);
        }
    }
}
