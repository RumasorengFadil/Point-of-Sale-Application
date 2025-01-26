<?php

namespace App\Services;

use App\Repositories\Accounting\JournalEntryRepository;
use App\Repositories\Accounting\MstAccountRepository;
use App\Repositories\Accounting\MstJournalCategoryRepository;
use App\Repositories\Accounting\MstTypeRepository;
use Carbon\CarbonImmutable;

class JournalEntryService
{
    protected $mstJournalCategoryRepository;
    protected $mstTypeRepository;
    protected $mstAccountRepository;
    protected $journalEntryRepository;
    protected $paginationService;
    public function __construct(MstAccountRepository $mstAccountRepository, MstTypeRepository $mstTypeRepository, MstJournalCategoryRepository $mstJournalCategoryRepository, JournalEntryRepository $journalEntryRepository, PaginationService $paginationService)
    {
        $this->mstJournalCategoryRepository = $mstJournalCategoryRepository;
        $this->mstTypeRepository = $mstTypeRepository;
        $this->mstAccountRepository = $mstAccountRepository;
        $this->journalEntryRepository = $journalEntryRepository;
        $this->paginationService = $paginationService;
    }
    /**
     * Get master data for categories, types, and accounts.
     *
     * @return array
     */
    public function getMasterData(): array
    {
        $categories = $this->mstJournalCategoryRepository->index();
        $types = $this->mstTypeRepository->index();
        $accounts = $this->mstAccountRepository->index();
        return [
            'journalCategories' => $categories,
            'journalTypes' => $types,
            'journalAccounts' => $accounts,
        ];
    }
    private function calculateDynamicBalance($journalEntries)
    {
        $saldo = 0;

        return $journalEntries->getCollection()->transform(function ($entry) use (&$saldo) {
            if ($entry->type->type_name === 'pemasukan') {
                $saldo += $entry->nominal;
            } elseif ($entry->type->type_name === 'pengeluaran') {
                $saldo -= $entry->nominal;
            }
            $entry->saldo = $saldo;
            return $entry;
        });
    }
    public function getJournalEntries()
    {
        $journalEntries = $this->journalEntryRepository->index();

        $this->calculateDynamicBalance($journalEntries);

        return $journalEntries;
    }
    public function filterJournalEntries(array $data)
    {
        // Parse the start date from the input data and set it to the start of the day
        $startDate = CarbonImmutable::parse($data['startDate'])->startOfDay();

        // Parse the end date from the input data and set it to the end of the day
        $endDate = CarbonImmutable::parse($data['endDate'])->endOfDay();

        // Retrieve journal entries filtered by start date, end date, and type
        $paginator = $this->journalEntryRepository->filter($startDate, $endDate, $data['type']);
        // Dynamically calculate and append the running balance to each journal entry
        $this->calculateDynamicBalance($paginator);

        // Convert the journal entries from a paginator object to an array for further modifications
        $journalEntries = $paginator->toArray();

        // Format pagination links with custom labels using the pagination service
        $journalEntries['links'] = $this->paginationService->formatPaginationLinks($paginator);

        // Return the filter parameters and modified journal entries as the response
        return $journalEntries; // The processed journal entries with custom pagination
    }
}

