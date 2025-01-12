<?php

namespace Database\Seeders;

use Database\Seeders\Accounting\MstJournalCategorySeeder;
use Database\Seeders\Accounting\MstTypeSeeder;
use Database\Seeders\POS\MstCategorySeeder;
use Database\Seeders\POS\ProductSeeder;
use Database\Seeders\POS\TransactionSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CashierSeeder::class,
            MstCategorySeeder::class,
            ProductSeeder::class,
            TransactionSeeder::class,
            MstTypeSeeder::class,
            MstJournalCategorySeeder::class,
        ]);
    }
}
