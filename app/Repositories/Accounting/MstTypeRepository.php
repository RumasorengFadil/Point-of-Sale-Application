<?php

namespace App\Repositories\Accounting;

use App\Models\Accounting\MstType;

class MstTypeRepository
{
    public function index()
    {
        return MstType::all();
    }
}