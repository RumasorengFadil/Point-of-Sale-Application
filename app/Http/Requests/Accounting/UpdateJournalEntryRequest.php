<?php

namespace App\Http\Requests\Accounting;

use App\Http\Requests\Traits\JournalEntryRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateJournalEntryRequest extends FormRequest
{
    use JournalEntryRules;
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
        return $this->journalEntryRules();
    }

    public function messages():array{
        return $this->journalEntryMessages();
    }
}
