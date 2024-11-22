<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category',
        'input_date',
        'type_id',
        'nominal',
        'evidence',
        'last_login',
    ];
}
