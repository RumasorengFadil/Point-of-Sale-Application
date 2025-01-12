<?php

namespace Database\Seeders\Accounting;

use App\Models\Accounting\MstJournalCategory;
use Illuminate\Database\Seeder;

class MstJournalCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'category_name' => "penjualan",
                'description' => "",
            ],
            [
                'category_name' => "operasional",
                'description' => "",
            ],
            [
                'category_name' => "sumber daya manusia",
                'description' => "",
            ],
            [
                'category_name' => "promosi/pemasaran",
                'description' => "",
            ],
            [
                'category_name' => "pemeliharaan",
                'description' => "",
            ],
            [
                'category_name' => "administrasi",
                'description' => "",
            ],
            [
                'category_name' => "lain-lain",
                'description' => "",
            ],
        ];
        
        foreach ($categories as $category) {
            MstJournalCategory::create($category);
        }
    }
}
