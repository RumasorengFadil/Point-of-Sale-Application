<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'cashier_id',
        'user_id',
        'subtotal',
        'discount',
        'tax',
        'total',
        'payment_method',
        'paid_amount',
        'change',
        'status',
        'note',
        'transaction_date',
    ];

    public function details()
    {
        return $this->hasMany(TransactionDetails::class, "transaction_id");
    }
}
