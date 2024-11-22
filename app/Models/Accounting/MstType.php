<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstType extends Model
{
    use HasFactory;

    protected $fillable = [
        'type_name',
    ];
}
