<?php

namespace App\Repositories\Accounting;

use App\Models\Accounting\JournalEntry;
use App\Models\Member;
use App\Models\Product\Product;
use DB;
use Illuminate\Pagination\LengthAwarePaginator;

class JournalEntryRepository
{
    public function index($perPage = null)
    {
        return JournalEntry::all();
    }
    public function store(array $data): JournalEntry
    {
        return JournalEntry::create($this->mapData($data));
    }

    public function update(array $data, $product): bool
    {
        return $product->update($this->mapData($data));
    }
    public function destroy($product): void
    {
        $product->delete();
    }

    private function mapData(array $data): array
    {
        $mappedData = [
            'input_date' => $data['inputDate'],
            'category_id' => $data['categoryId'],
            'account_id' => 1,
            'type_id' => $data['typeId'],
            'nominal' => $data['nominal'],
            'description' => $data['description'],
            'evidence' => $data['evidence'],
            'last_login' => now()->toDateTimeString(),
        ];

        return $mappedData;
    }
}