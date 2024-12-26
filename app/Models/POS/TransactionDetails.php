<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaction_id',
        'product_id',
        'product_name',
        'quantity',
        'unit_price',
        'category_name',
        'discount_amount',
        'discount_percentage',
    ];

}
