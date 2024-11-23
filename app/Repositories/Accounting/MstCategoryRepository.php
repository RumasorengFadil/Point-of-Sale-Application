<?php

namespace App\Repositories\Accounting;

use App\Models\POS\MstCategory;

class MstCategoryRepository
{
    public function index()
    {
        return MstCategory::all();
    }
}