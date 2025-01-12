<?php

namespace App\Http\Requests\Traits;

use Illuminate\Validation\Rule;

trait FilterRules
{
    protected function filterRules()
    {
        return [
            'startDate' => 'nullable|string',
            'endDate' => 'nullable|string',
            'type' => 'nullable|string',
        ];
    }

    public function filterMessages()
    {
        return [
            'startDate.required' => "Tanggal Mulai Belum Diisi!.",
            'endDate.required' => "Tanggal Berakhir Belum Diisi!.",
        ];
    }
}