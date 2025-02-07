<?php

namespace App\Http\Requests\Accounting;

use App\Http\Requests\Traits\FilterRules;
use Illuminate\Foundation\Http\FormRequest;

class FinancialReportRequest extends FormRequest
{
    use FilterRules;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function rules(): array
    {
        return [...$this->filterRules()];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function messages(): array
    {
        return $this->filterMessages();
    }
}
