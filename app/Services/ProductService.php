<?php

namespace App\Services;

use App\Models\Product\Product;
use App\Repositories\Product\ProductRepository;
use DB;
use Storage;

class ProductService
{
    protected $productRepository;
    protected $photoService;
    public function __construct(ProductRepository $productRepository, PhotoService $photoService)
    {
        $this->productRepository = $productRepository;
        $this->photoService = $photoService;
    }
    public function destroys($selectedProductIds)
    {
        DB::transaction(function () use ($selectedProductIds) {
            $products = Product::whereIn('id', $selectedProductIds)->get();
            foreach ($products as $member) {
                $this->photoService->removePhoto($member->memberPhotoPath, 'biblio');

                $this->productRepository->destroy($member);
            }
        });
    }

    public function mapProducts(array $products): array
    {
        return collect($products)->map(function ($product) {
            $imagePath = '/uploads/img/products/' . $product['image'];
            $product['image'] = Storage::disk('public')->exists($imagePath)
                ? '/storage' . $imagePath
                : '/img/app/product/' . $product['image'];

            return $product;
        })->toArray();
    }
    public function mapProduct(array $product): array
    {
        $imagePath = '/uploads/img/products/' . $product['image'];

        $product['image'] = Storage::disk('public')->exists($imagePath)
                ? '/storage' . $imagePath
                : '/img/app/product/' . $product['image'];

        return $product;
    }
}

