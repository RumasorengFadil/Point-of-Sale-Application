<?php

namespace App\Repositories\Accounting;

use App\Models\Accounting\MstJournalCategory;


class MstJournalCategoryRepository
{
    public function index()
    {
        return MstJournalCategory::all();
    }
}