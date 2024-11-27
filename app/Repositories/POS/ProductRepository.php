<?php

namespace App\Repositories\POS;

use App\Models\POS\Product;

class ProductRepository
{
    public function index($perPage = null)
    {
        return Product::with('category')->get();
    }
    public function store(array $data): Product
    {
        return Product::create($this->mapData($data));
    }

    public function update(array $data, $product): bool
    {
        return $product->update($this->mapData($data));
    }
    public function destroy($product): void
    {
        $product->delete();
    }

    private function mapData(array $data): array
    {
        $mappedData = [
            'category_id' => $data['categoryId'],
            'name' => $data['name'],
            'price' => $data['price'],
            'discount' => $data['discount'],
            'stock' => $data['stock'],
            'image' => $data['image'],
        ];

        return $mappedData;
    }
}