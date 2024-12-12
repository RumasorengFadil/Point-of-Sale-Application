<?php

namespace Database\Seeders\POS;

use App\Models\POS\MstProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MstCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MstProductCategory::create(['category_name' => 'makanan']);
        MstProductCategory::create(['category_name' => 'minuman']);
    }
}
