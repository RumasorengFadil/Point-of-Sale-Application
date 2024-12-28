<?php

namespace App\Http\Controllers\POS\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\POS\Settings\UserProfileRequest;
use App\Repositories\Settings\UserProfileRepository;
use App\Services\PhotoService;
use Auth;

class UserProfileController extends Controller
{
    private const PHOTO_TYPE = 'user';
    protected $photoService;
    protected $userProfileRepository;
    public function __construct(PhotoService $photoService, UserProfileRepository $userProfileRepository)
    {
        $this->photoService = $photoService;
        $this->userProfileRepository = $userProfileRepository;
    }

    public function update(UserProfileRequest $request){

         // Get user 
         $user = Auth::user();

         // Validate admin data
         $validatedData = $request->validated();
 
         // Handle Photo Admin 
         $validatedData['image'] = $this->photoService->handleUpdatePhoto($validatedData['image'], $user['image'], self::PHOTO_TYPE);
 
         // Updated admin data
         $this->userProfileRepository->update($validatedData, $user);
 
        return redirect()->route('pos-settings.index')->with(['message' => __('message.success.updated', ['entity' => "User"])]);; 
    }
}
