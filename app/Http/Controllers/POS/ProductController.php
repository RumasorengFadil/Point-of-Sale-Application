<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\StoreProductRequest;
use App\Http\Requests\POS\UpdateProductRequest;
use App\Models\POS\Product;
use App\Repositories\POS\MstCategoryRepository;
use App\Repositories\POS\ProductRepository;
use App\Services\PhotoService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $productRepository;
    protected $mstCategoryRepository;
    protected $photoService;
    public function __construct(ProductRepository $productRepository, PhotoService $photoService, MstCategoryRepository $mstCategoryRepository)
    {
        $this->productRepository = $productRepository;
        $this->photoService = $photoService;
        $this->mstCategoryRepository = $mstCategoryRepository;
    }
    public function index()
    {
        $products = $this->productRepository->index();
        return inertia()->render('POS/Product', ['products' => $products]);
    }
    public function create()
    {
        $categories = $this->mstCategoryRepository->index();

        return inertia()->render('Product/CreateProduct', ['categories', $categories]);
    }
    public function store(StoreProductRequest $request)
    {

        try {
            // Melakukan validasi terhadap data product
            $validatedData = $request->validated();

            // Handle Photo Product
            $validatedData['image'] = $this->photoService->handlePhoto($validatedData['image'], 'product');

            // Added product data and image path into database
            $this->productRepository->store($validatedData);

            return redirect()->route('product.create')
                ->with(['message' => __('message.success.stored', ['entity' => 'Product'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to store product: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Product'])]);
        }

    }
    public function edit(Product $product)
    {
        // $product = $this->productService->mapProduct($product->getAttributes());
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
            $this->productRepository->update($validatedData, $product);

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
    // public function destroys(DestroysProductRequest $request)
    // {
    //     //
    //     try {
    //         // Validated data products
    //         $validatedData = $request->validated();

    //         // Destroys the products
    //         $this->productService->destroys($validatedData['selectedProductIds']);

    //         return redirect()->back()
    //             ->with(['message' => __('message.success.destroyed', ['entity' => 'Product'])]);

    //     } catch (\Exception $e) {
    //         // Log the error for debugging
    //         \Log::error('Failed to destroy product: ' . $e->getMessage());
    //         // Redirect back with error message
    //         redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Product'])]);
    //     }
    // }
}
