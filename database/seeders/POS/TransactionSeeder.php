<?php

namespace Database\Seeders\POS;

use App\Models\POS\Transaction;
use App\Models\POS\TransactionDetails;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function getItems(int $size = 3)
    {
        // Membuat array untuk menyimpan data
        $items = [];

        // Loop sebanyak parameter size
        for ($i = 0; $i < $size; $i++) {
            // Menambahkan item ke array
            $items[] = [
                'product_id' => fake()->numberBetween(1, 3),
                'product_name' => fake()->word,
                'quantity' => fake()->numberBetween(1, 3),
                'unit_price' => fake()->numberBetween(10000, 50000),
                'category_name' => fake()->randomElement(['makanan','minuman']),
                'discount_amount' => fake()->numberBetween(0, 5000),
                'discount_percentage' => fake()->numberBetween(0, 50),
            ];
        }

        // Mengembalikan array items
        return $items;
    }

    public function calculateSubtotals( $items)
    {
        // Menyimpan subtotal untuk setiap item
        $subtotals = 0;

        // Iterasi setiap item untuk menghitung subtotal
        foreach ($items as $item) {
            $subtotals += $item['unit_price'] * $item['quantity'];
        }

        // Mengembalikan array subtotals
        return $subtotals;
    }

    public function calculateTotalDiscount( $items)
    {
        // Inisialisasi total diskon
        $totalDiscount = 0;

        // Iterasi setiap item untuk menghitung total diskon
        foreach ($items as $item) {
            // Menambahkan discount_amount dari setiap item ke totalDiskon
            $totalDiscount += $item['discount_amount'];
        }

        // Mengembalikan total diskon
        return $totalDiscount;
    }

    public function run(): void
    {
        for ($i = 0; $i < 100; $i++) {
            // Ambil item hanya untuk transaksi ini
            $items = collect($this->getItems())->take(3); // Batasi hanya 3 item
            $subtotal = $this->calculateSubtotals($items); // Menghitung subtotal
            $discount = $this->calculateTotalDiscount($items); // Menghitung total discount
            $total = $subtotal - $discount;
            $paid_amount = fake()->numberBetween(500000, 150000);
            $change = $paid_amount - $total;
        
            $transaction = Transaction::create([
                'cashier_id' => null,
                'user_id' => 1,
                'subtotal' => $subtotal,
                'discount' => $discount,
                'tax' => null,
                'total' => $total,
                'payment_method' => fake()->randomElement(['cash']),
                'paid_amount' => $paid_amount,
                'change' => $change,
                'status' => fake()->randomElement(['completed']),
                'note' => fake()->sentence,
                'transaction_date' => fake()->dateTimeBetween('-24 month', 'now'),
                'created_at' => fake()->dateTimeBetween('-24 month', 'now'),
            ]);
        
            // Tambahkan detail transaksi
            foreach ($items as $item) {
                TransactionDetails::create([
                    'transaction_id' => $transaction->id,
                    'product_id' => $item['product_id'],
                    'product_name' => $item['product_name'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unit_price'],
                    'category_name' => $item['category_name'],
                    'discount_amount' => $item['discount_amount'],
                    'discount_percentage' => $item['discount_percentage'],
                    'created_at' => $transaction->created_at,
                    'updated_at' => $transaction->updated_at,
                ]);
            }
        }
    }
}
