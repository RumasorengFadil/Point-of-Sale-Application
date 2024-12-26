<?php

namespace App\Services;

use Illuminate\Pagination\LengthAwarePaginator;

class PaginationService
{
    public function formatPaginationLinks(LengthAwarePaginator $paginator)
    {
        $currentPage = $paginator->currentPage();
        $lastPage = $paginator->lastPage();
        $links = [];

        // Tambahkan Previous button
        if ($currentPage > 1) {
            $links[] = [
                'label' => 'Previous',
                'url' => $paginator->url($currentPage - 1),
                'active' => false,
            ];
        } else {
            $links[] = [
                'label' => 'Previous',
                'url' => null,
                'active' => false,
                'disabled' => true, // Disabled jika sudah di halaman pertama
            ];
        }

        // Halaman pertama jika jauh dari halaman saat ini
        if ($currentPage > 2) {
            $links[] = ['label' => 1, 'url' => $paginator->url(1)];
            if ($currentPage > 3) {
                $links[] = ['label' => '...', 'url' => null];
            }
        }

        // Tampilkan halaman saat ini dan dua halaman di sebelahnya
        for ($i = max(1, $currentPage - 1); $i <= min($lastPage, $currentPage + 1); $i++) {
            $links[] = [
                'label' => $i,
                'url' => $paginator->url($i),
                'active' => $i === $currentPage,
            ];
        }

        // Halaman terakhir jika jauh dari halaman saat ini
        if ($currentPage < $lastPage - 1) {
            if ($currentPage < $lastPage - 2) {
                $links[] = ['label' => '...', 'url' => null];
            }
            $links[] = ['label' => $lastPage, 'url' => $paginator->url($lastPage)];
        }

        // Tambahkan Next button
        if ($currentPage < $lastPage) {
            $links[] = [
                'label' => 'Next',
                'url' => $paginator->url($currentPage + 1),
                'active' => false,
            ];
        } else {
            $links[] = [
                'label' => 'Next',
                'url' => null,
                'active' => false,
                'disabled' => true, // Disabled jika sudah di halaman terakhir
            ];
        }

        return $links;
    }
}
