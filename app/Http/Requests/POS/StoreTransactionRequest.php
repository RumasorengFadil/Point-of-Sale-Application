<?php

namespace App\Http\Requests\POS;

use Illuminate\Foundation\Http\FormRequest;

class StoreTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'cashierId' => 'required|exists:mst_product_categories,id',
            'subtotal' => 'required',
            'discount' => 'required',
            'total' => 'required',
            'paymentMethod' => 'required',
            'paidAmount' => 'required',
            'change' => 'required',
            'note' => 'nullable',
            'products' => 'required|array',
            'products.*.id' => 'required|integer|exists:products,id',
            'products.*.name' => 'required|string',
            'products.*.quantity' => 'required|number',
            'products.*.unitPrice' => 'required|number',
            'products.*.subTotal' => 'required|number',
        ];
    }
    public function messages(): array
    {
        return [
            'cashierId.required' => 'Kasir ID tidak ditemukan!',
            'cashierId.exist' => 'Kasir tidak ditemukan!.',
            'subtotal' => 'Subtotal produk belum diisi!.',
            'discount' => 'Discount produk belum diisi!.',
            'total' => 'Total produk belum diisi!.',
            'paymentMethod' => 'Metode Pembayaran produk belum diisi!.',
            'paidAmount' => 'Jumlah yang dibayarkan produk belum diisi!.',
            'change' => 'uang Kembalian belum diisi!.',
            'note' => 'nullable',
            'products' => 'Produk belum ditambahkan.!',
            'products.*.id' => 'Produk tidak ditemukan.!',
        ];
    }
}
