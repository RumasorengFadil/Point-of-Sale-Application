<?php

namespace App\Http\Requests\Traits;

use Illuminate\Validation\Rule;

trait ProductRules
{
    protected function productRules()
    {

        return [
            'categoryId' => 'required|exists:mst_product_categories,id',
            'name' => 'required|string|max:25',
            'price' => 'required|integer|min:0',
            'discount' => 'required|integer|min:0',
            'stock' => 'required|integer|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
        ];
    }

    public function productMessages()
    {
        return [
            'categoryId.required' => 'Kategori belum diisi!',
            'categoryId.exist' => 'Kategori tidak ditemukan!.',
            'name.required' => 'Nama produk belum diisi!.',
            'name.string' => 'Nama harus berupa string!.',
            'name.max' => 'Nama harus kurang 25 karakter.',
            'price.required' => 'Harga produk belum diisi!.',
            'price.min' => 'Harga tidak boleh negatif!.',
            'discount.required' => 'Diskon harus diisi!',
            'discount.min' => 'Diskon tidak boleh negatif!.',
            'stock.required' => 'Stok harus diisi!',
            'stock.min' => 'Stok tidak boleh negatif!.',
            'image.image' => 'File harus berupa gambar!',
            'image.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'image.max' => 'Gambar tidak boleh melebihi 4mb!',
        ];
    }
}