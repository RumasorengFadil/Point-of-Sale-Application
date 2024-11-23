<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JournalEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'input_date',
        'category_id',
        'account_id',
        'type_id',
        'nominal',
        'description',
        'evidence',
        'last_login',
    ];
}
