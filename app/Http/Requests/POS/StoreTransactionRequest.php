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
            'cashierId' => ['nullable', 'exists:cashiers,id'],
            'userId' => ['nullable', 'exists:users,id'],
            'subtotal' => 'required|numeric',
            'discount' => 'required',
            'total' => 'required|numeric',
            'paymentMethod' => 'required',
            'paidAmount' => ['required', 'numeric', new PaidAmountGreaterThanTotal()],
            'change' => 'required',
            'note' => 'nullable',
            'cartDetails' => 'required|array',
            'cartDetails.*.id' => 'required|integer|exists:products,id',
            'cartDetails.*.name' => 'required|string',
            'cartDetails.*.quantity' => 'required|numeric',
            'cartDetails.*.unitPrice' => 'required|numeric',
            'cartDetails.*.categoryName' => 'required|string',
            'cartDetails.*.discountAmount' => 'required|numeric',
            'cartDetails.*.discountPercentage' => 'required|numeric',
        ];
    }
    public function messages(): array
    {
        return [
            'cashierId.exists' => 'Cashier ID yang diberikan tidak valid.',
            'userId.exists' => 'Admin ID yang diberikan tidak valid.',
            'subtotal.required' => 'Subtotal produk belum diisi!.',
            'discount.required' => 'Discount produk belum diisi!.',
            'total.required' => 'Total produk belum diisi!.',
            'paymentMethod.required' => 'Metode Pembayaran produk belum diisi!.',
            'paidAmount.required' => 'Jumlah yang dibayarkan belum diisi!.',
            'change.required' => 'uang Kembalian belum diisi!.',
            'cartDetails.required' => 'Produk belum ditambahkan.!',
            'cartDetails.*.id.required' => 'Produk tidak ditemukan.!',
            'cartDetails.*.categoryName' => 'Kategori harus diisi.!',
        ];
    }
}

