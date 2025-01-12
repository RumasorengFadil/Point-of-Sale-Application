<?php

namespace App\Providers;

use App\Models\Accounting\JournalEntry;
use App\Models\POS\Product;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/accounting/dashboard';
    public const CASHIER_HOME = '/pos/transaction';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        // Model Binding
        Route::model('product', Product::class);
        Route::model('journalEntry', JournalEntry::class);
        
        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'))
                ->group(base_path('routes/POS/web.php'))
                ->group(base_path('routes/Accounting/web.php'));
        });
    }
}
