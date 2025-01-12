<?php

namespace App\Repositories\Accounting;

use App\Models\Accounting\JournalEntry;

class JournalEntryRepository
{
    private const DATA_SIZE = 50;
    public function index($size = self::DATA_SIZE)
    {
        return JournalEntry::with(['type','category'])->paginate($size);
    }
    public function store(array $data): JournalEntry
    {
        return JournalEntry::create($this->mapData($data));
    }

    public function update(array $data, $journalEntry): bool
    {
        return $journalEntry->update($this->mapData($data));
    }
    public function destroy($journalEntry): void
    {
        $journalEntry->delete();
    }
    public function filter($startDate, $endDate, $type, $size = self::DATA_SIZE)
    {
        return JournalEntry::with('type', 'category')
            ->when($type !== 'default' && $startDate && $endDate, function ($query) use ($startDate, $endDate) {
                $query->whereBetween('created_at', [$startDate, $endDate]);
            })->paginate($size);
    }
    private function mapData(array $data): array
    {
        $mappedData = [
            'input_date' => $data['inputDate'],
            'category_id' => $data['categoryId'],
            // 'account_id' => 1,
            'type_id' => $data['typeId'],
            'nominal' => $data['nominal'],
            'description' => $data['description'],
            'evidence' => $data['evidence'],
        ];

        if (!is_null($data['evidence'])) {
            $mappedData["evidence"] = $data['evidence'];
        }
        return $mappedData;
    }
}