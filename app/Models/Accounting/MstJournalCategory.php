<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstJournalCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name',
        'description',
    ];
}
