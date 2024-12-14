<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CashierOrUserId implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $cashierId = request()->input('cashierId');
        $userId = request()->input('userId');

        if (empty($cashierId) && empty($userId)) {
            $fail('Baik ID Kasir ataupun ID User tidak boleh kosong'); // Keduanya kosong
        }
        
        if (!empty($cashierId) && !empty($userId)) {
            $fail('Hanya salah satu dari kasir atau user yang dapat melakukan transaksi');
        }
    }
}

