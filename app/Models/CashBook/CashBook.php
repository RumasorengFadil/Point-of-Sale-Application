<?php

namespace App\Models\CashBook;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashBook extends Model
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
