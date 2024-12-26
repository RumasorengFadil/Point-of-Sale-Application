<?php

namespace Database\Seeders\POS;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\POS\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Ayam Geprek',
                'category_id' => 1,
                'price' => 50000,
                'discount' => 10,
                'stock' => 100,
                'image' => 'seed-images/product_a.jpg',
            ],
            [
                'name' => 'Ice tea',
                'category_id' => 2,
                'price' => 75000,
                'discount' => 15,
                'stock' => 50,
                'image' => 'seed-images/product_b.jpg',
            ],
            [
                'name' => 'Sate Ayam',
                'category_id' => 1,
                'price' => 100000,
                'discount' => 0,
                'stock' => 25,
                'image' => 'seed-images/product_c.jpg',
            ],
        ];

        // Loop untuk memasukkan data ke database
        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
