<?php

namespace App\Services;

use App\Repositories\Accounting\MstAccountRepository;
use App\Repositories\Accounting\MstJournalCategoryRepository;
use App\Repositories\Accounting\MstTypeRepository;


class JournalEntryService
{
    protected $mstJournalCategoryRepository;
    protected $mstTypeRepository;
    protected $mstAccountRepository;
    public function __construct(MstAccountRepository $mstAccountRepository, MstTypeRepository $mstTypeRepository, MstJournalCategoryRepository $mstJournalCategoryRepository)
    {
        $this->mstJournalCategoryRepository = $mstJournalCategoryRepository;
        $this->mstTypeRepository = $mstTypeRepository;
        $this->mstAccountRepository = $mstAccountRepository;
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
        $accounts = $this->mstTypeRepository->index();

        return [
            'categories' => $categories,
            'types' => $types,
            'accounts' => $accounts,
        ];
    }
}

