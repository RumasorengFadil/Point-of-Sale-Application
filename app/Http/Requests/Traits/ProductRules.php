<?php

namespace App\Http\Requests\Traits;

use Illuminate\Validation\Rule;

trait ProductRules
{
    protected function productRules()
    {

        return [
            'categoryId' => 'required|exists:mst_product_categories,id',
            'name' => 'required|string',
            'price' => 'required|number',
            'discount' => 'nullable|number',
            'stock' => 'nullable|number',
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
            'price.required' => 'Harga produk belum diisi!.',
            // 'discount.required' => 'Deskripsi harus diisi!',
            // 'image.required' => 'Member image harus diisi!',
            'image.image' => 'File harus berupa gambar!',
            'image.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'image.max' => 'Gambar tidak boleh melebihi 4mb!',
        ];
    }
}