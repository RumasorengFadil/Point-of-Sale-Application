<?php

namespace App\Repositories\Accounting;

use App\Models\Accounting\MstAccount;

class MstAccountRepository
{
    public function index()
    {
        return MstAccount::all();
    }
}