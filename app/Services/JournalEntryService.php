<?php

namespace App\Services;

use App\Models\Product\Product;
use App\Repositories\Product\ProductRepository;
use DB;
use Storage;

class JournalEntryService
{
    protected $mstCategoryRepository;
    protected $mstTypeRepository;
    protected $mstAccountRepository;
    public function __construct(MstAccountRepository $mstAccountRepository, MstTypeRepository $mstTypeRepository, MstCategoryRepository $mstCategoryRepository)
    {
        $this->mstCategoryRepository = $mstCategoryRepository;
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
        $categories = $this->mstCategoryRepository->index();
        $types = $this->mstTypeRepository->index();
        $accounts = $this->mstTypeRepository->index();

        return [
            'categories' => $categories,
            'types' => $types,
            'accounts' => $accounts,
        ];
    }
}

