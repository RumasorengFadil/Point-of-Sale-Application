<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'price',
        'discount',
        'stock',
        'image',
    ];

    public function category() {
        return $this->belongsTo(MstProductCategory::class, 'category_id');
    }
}
