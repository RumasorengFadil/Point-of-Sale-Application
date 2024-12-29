<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\Http\Requests\Accounting\StoreJournalEntryRequest;
use App\Http\Requests\Accounting\UpdateJournalEntryRequest;
use App\Models\Accounting\JournalEntry;
use App\Repositories\Accounting\JournalEntryRepository;
use App\Services\JournalEntryService;
use App\Services\PhotoService;

class JournalEntryController extends Controller
{
    protected $journalEntryRepository;
    protected $photoService;
    protected $journalEntryService;

    public function __construct(JournalEntryRepository $journalEntryRepository, PhotoService $photoService, JournalEntryService $journalEntryService){
        $this->journalEntryRepository = $journalEntryRepository;
        $this->photoService = $photoService;
        $this->journalEntryService = $journalEntryService;
    }   
    public function index()
    {
        $journalEntries = $this->journalEntryRepository->index();


        return inertia()->render('Accounting/JournalEntry/JournalEntry', ['JournalEntries' => $journalEntries]);
    }
    public function create()
    {
        $masterData = $this->journalEntryService->getMasterData();

        return inertia()->render('Accounting/CreateJournalEntry', ['masterData' => $masterData]);
    }
    public function store(StoreJournalEntryRequest $request)
    {
        try {
            // Validate product Journal Entry
            $validatedData = $request->validated();

            // Handle Photo Evidence
            $validatedData['evidence'] = $this->photoService->handlePhoto($validatedData['evidence'], 'evidence', null);

            // Added product data and image path into database
            $this->journalEntryRepository->store($validatedData);

            return redirect()->route('journal-entry.create')
                ->with(['message' => __('message.success.stored', ['entity' => 'Transaction'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to store product: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Transaction'])]);
        }

    }
    public function edit(JournalEntry $journalEntry)
    {
        $masterData = $this->journalEntryService->getMasterData();

        return inertia()->render('Accounting/EditJournalEntry', ['journalEntry' => $journalEntry, 'masterData' => $masterData]);
    }
    public function update($product, UpdateJournalEntryRequest $request)
    {

        try {
            // Validate product data
            $validatedData = $request->validated();

            // Handle Photo Product
            $evidence = $this->photoService->handleUpdatePhoto($validatedData['evidence'], $product['evidence'], 'evidence', null);
            
            // Sets the evidence image to the old path when the evidence image variable is null 
            $validatedData['evidence'] = $evidence !== null ? $evidence : $product['evidence'];

            // Added journal entry data and image path into database
            $this->journalEntryRepository->update($validatedData, $product);

            return redirect()->back()
                ->with(['message' => __('message.success.updated', ['entity' => 'Transaction'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to update Ttansaction: ' . $e->getMessage());

            return redirect()->back()->withErrors(['error' => __('message.error.updated', ['entity' => 'Transaction'])]);
        }

    }

    public function destroy($journalEntry)
    {
        try {
            // Remove product photo
            $this->photoService->removePhoto($journalEntry->evidence, 'evidence');
            
            // Destroy the product
            $this->journalEntryRepository->destroy($journalEntry);

            return redirect()->back()
                ->with(['message' => __('message.success.destroyed', ['entity' => 'Product'])]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Failed to destroy product: ' . $e->getMessage());
            // Redirect back with error message
            redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Product'])]);
        }
    }
    // public function destroys(DestroysProductRequest $request)
    // {
    //     //
    //     try {
    //         // Validated data products
    //         $validatedData = $request->validated();

    //         // Destroys the products
    //         $this->productService->destroys($validatedData['selectedProductIds']);

    //         return redirect()->back()
    //             ->with(['message' => __('message.success.destroyed', ['entity' => 'Product'])]);

    //     } catch (\Exception $e) {
    //         // Log the error for debugging
    //         \Log::error('Failed to destroy product: ' . $e->getMessage());
    //         // Redirect back with error message
    //         redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Product'])]);
    //     }
    // }
}
