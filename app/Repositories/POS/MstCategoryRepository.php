<?php

namespace App\Repositories\POS;

use App\Models\POS\MstCategory;

class MstCategoryRepository
{
    public function index()
    {
        return MstCategory::all();
    }
}