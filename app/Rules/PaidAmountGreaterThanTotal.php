<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class PaidAmountGreaterThanTotal implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // Ambil nilai 'total' dari input
        $total = request()->input('total');

        // Jika paidAmount lebih kecil dari total, panggil fail untuk menghasilkan pesan error
        if ($value < $total) {
            $fail('Paid Amount tidak boleh kurang dari Total.');
        }
    }
}
