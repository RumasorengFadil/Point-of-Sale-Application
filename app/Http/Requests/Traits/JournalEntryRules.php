<?php

namespace App\Http\Requests\Traits;

use Illuminate\Validation\Rule;

trait JournalEntryRules
{
    protected function journalEntryRules()
    {
        return [
            'inputDate' => 'required',
            'categoryId' => 'required|exists:mst_journal_categories,id',
            // 'accountId' => 'required|exists:mst_accounts,id',
            'typeId' => 'required|exists:mst_types,id',
            'nominal' => 'required|number',
            'description' => 'required|string',
            'evidence' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
        ];
    }

    public function journalEntryMessages()
    {
        return [
            'inputDate.required' => 'Tanggal transaksi belum diisi!',
            'categoryId.required' => 'Kategori belum diisi!',
            'categoryId.exist' => 'Kategori tidak ditemukan!.',
            'typeId.required' => 'Tipe belum diisi!',
            'typeId.exist' => 'Tipe tidak ditemukan!.',
            'nominal.required' => 'Nominal belum diisi!.',
            'nominal.number' => 'Nominal harus berupa angka!.',
            'deskripsi.required' => 'Deskripsi belum diisi!.',
            'deskripsi.number' => 'Deskripsi harus berupa string!.',

            // 'evidence.required' => 'Bukti transaksi harus diisi!',
            'evidence.image' => 'File harus berupa gambar!',
            'evidence.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'evidence.max' => 'Gambar tidak boleh melebihi 4mb!',
        ];
    }
}