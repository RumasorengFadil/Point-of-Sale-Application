<?php

namespace App\Http\Requests\POS;

use Illuminate\Foundation\Http\FormRequest;

class TransactionFilterRequest extends FormRequest
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
            'startDate' => 'nullable|string',
            'endDate' => 'nullable|string',
            'type' => 'nullable|string',
        ];
    }

    public function messages():array
    {
        return [
            'startDate.required' => "Tanggal Mulai Belum Diisi!.",
            'endDate.required' => "Tanggal Berakhir Belum Diisi!.",
        ];
    }
}
