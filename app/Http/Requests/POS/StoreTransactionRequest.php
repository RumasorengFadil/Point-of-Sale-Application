<?php

namespace App\Http\Requests\POS;

use App\Rules\PaidAmountGreaterThanTotal;
use Illuminate\Foundation\Http\FormRequest;

class StoreTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'cashierId' => 'required_without:userId|exists:cashiers,id',
            'userId' => 'required_without:cashierId|exists:users,id',
            'subtotal' => 'required|numeric',
            'discount' => 'required',
            'total' => 'required|numeric',
            'paymentMethod' => 'required',
            'paidAmount' => ['required', 'numeric', new PaidAmountGreaterThanTotal],
            'change' => 'required',
            'note' => 'nullable',
            'cartDetails' => 'required|array',
            'cartDetails.*.id' => 'required|integer|exists:products,id',
            'cartDetails.*.name' => 'required|string',
            'cartDetails.*.quantity' => 'required|numeric',
            'cartDetails.*.unitPrice' => 'required|numeric',
            'cartDetails.*.discountAmount' => 'required|numeric',
            'cartDetails.*.discountPercentage' => 'required|numeric',
        ];
    }
    public function messages(): array
    {
        return [
            'cashierId.required_without' => 'ID Kasir tidak ditemukan!.',
            'userId.required_without' => 'ID Admin/Owner tidak ditemukan!.',
            'cashierId.exists' => 'Cashier ID yang diberikan tidak valid.',
            'userId.exists' => 'Admin ID yang diberikan tidak valid.',
            'subtotal' => 'Subtotal produk belum diisi!.',
            'discount' => 'Discount produk belum diisi!.',
            'total' => 'Total produk belum diisi!.',
            'paymentMethod' => 'Metode Pembayaran produk belum diisi!.',
            'paidAmount' => 'Jumlah yang dibayarkan produk belum diisi!.',
            'change' => 'uang Kembalian belum diisi!.',
            'note' => 'nullable',
            'cartDetails' => 'Produk belum ditambahkan.!',
            'cartDetails.*.id' => 'Produk tidak ditemukan.!',
        ];
    }
}

