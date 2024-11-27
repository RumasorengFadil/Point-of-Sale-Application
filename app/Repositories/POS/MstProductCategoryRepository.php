<?php

namespace App\Repositories\POS;

use App\Models\POS\MstProductCategory;

class MstProductCategoryRepository
{
    public function index()
    {
        return MstProductCategory::with('products')->get();
    }
}