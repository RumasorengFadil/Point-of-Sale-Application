<?php

namespace App\Services;

use App\Exceptions\PhotoHandlingException;
use App\Models\Biblio;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;

class PhotoService
{
    private const EVIDENCE_PHOTO_PATH = '/uploads/accounting/img/evidences/';
    private const PRODUCT_PHOTO_PATH = '/uploads/POS/img/products/';
    private const USER_PHOTO_PATH = '/uploads/POS/img/users/';
    private const CASHIER_PHOTO_PATH = '/uploads/POS/img/cashiers/';
    private const COMMON_PHOTO_PATH = '/uploads/commons/img/';

    public function handlePhoto($image, $type, $size = 800)
    {
        try {
            if (!$image)
                return null;

            // create new manager instance with desired driver
            $manager = new ImageManager(new Driver());

            // Membuat nama file unik
            $filename = uniqid() . '_' . $image->getClientOriginalName();

            //Memperoleh path
            $path = $this->getPathByType($type);

            // Baca gambar menggunakan Intervention Image
            $img = $manager->read($image);

            // Optimalisasi ukuran gambar (resize)
            $img->resize($size, null);

            // Kompresi gambar dengan mengatur kualitas
            $img->toJpeg(75); // mengubah ke format JPG dan kualitas 75%

            // Simpan gambar
            Storage::disk('public')->put((string) $path . $filename, $img->encode());

            // Kembalikan URL yang dapat diakses
            return $filename;
        } catch (\Exception $e) {
            throw new PhotoHandlingException("Failed to handle $type photo", 0, $e);
        }
    }
    public function handleUpdatePhoto($photo, $photoPath, $type, $size = 800)
    {
        if (!$photo)
        return;
    
    // Menghapus data foto sebelumnya
    self::removePhoto($photoPath, $type);
    // Handle gambar biblio
    $filename = self::handlePhoto($photo, $type, $size);
    
        return $filename;
    }

    public function removePhoto($photoPath, $type)
    {
        $path = $this->getPathByType($type);

        if (Storage::disk('public')->exists((string) $path . $photoPath)) {
            Storage::disk('public')->delete((string) $path . $photoPath);
        }
    }

    private function getPathByType($type)
    {
        if ($type === 'product') {
            return self::PRODUCT_PHOTO_PATH;
        }

        if ($type === 'user') {
            return self::USER_PHOTO_PATH;
        }

        if ($type === 'cashier') {
            return self::CASHIER_PHOTO_PATH;
        }

        if ($type === 'evidence') {
            return self::EVIDENCE_PHOTO_PATH;
        }

        return self::COMMON_PHOTO_PATH;
    }
}
