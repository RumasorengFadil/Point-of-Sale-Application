<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstProductCategory extends Model
{
    protected $fillable = [
        'category_name',
    ];

    public function products() {
        return $this->hasMany(Product::class, 'category_id', 'id');
    }
}
