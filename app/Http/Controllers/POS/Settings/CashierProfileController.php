<?php

namespace App\Http\Controllers\POS\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\Settings\CashierProfileRequest;
use App\Repositories\Settings\CashierProfileRepository;
use App\Services\PhotoService;
use Auth;

class CashierProfileController extends Controller
{
    private const PHOTO_TYPE = 'user';
    protected $photoService;
    protected $cashierProfileRepository;
    public function __construct(PhotoService $photoService, CashierProfileRepository $cashierProfileRepository)
    {
        $this->photoService = $photoService;
        $this->cashierProfileRepository = $cashierProfileRepository;
    }

    public function update(CashierProfileRequest $request){

        // Get user 
        $user = Auth::user();

        // Validate Cashier data
        $validatedData = $request->validated();

        // Handle Photo Cashier 
        $validatedData['image'] = $this->photoService->handleUpdatePhoto($validatedData['image'], $user['image'], self::PHOTO_TYPE);

        // Updated Cashier data
        $this->cashierProfileRepository->update($validatedData, $user);

        return redirect()->back()->with(['message' => __('message.success.updated', ['entity' => "Profile"])]);; 
   }
}
