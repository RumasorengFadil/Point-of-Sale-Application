<?php

namespace App\Helpers;

use Illuminate\Database\Eloquent\Builder;
use Route;

class RouteHelper
{
    public static function getLastRouteName(): mixed
    {
        $routeName = Route::currentRouteName(); // Contoh: settings.user-accounts.instagram.index
        if (!$routeName) {
            return null; // Jika tidak ada route aktif
        }

        // Ambil segmen terakhir sebelum operasi CRUD
        preg_match('/([a-zA-Z0-9_-]+)\.(index|create|edit|show|destroy|update|filter)$/', $routeName, $matches);

        // $matches[1] akan berisi segmen terakhir sebelum CRUD
        return $matches[1] ?? null;
    }
}
