<?php

namespace App\Console\Commands;

use App\Models\Accounting\JournalEntry;
use App\Models\POS\Transaction;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SyncPOSWithAccounting extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:sync-p-o-s-with-accounting';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try{
            // Ambil semua penjualan hari ini
            $today = Carbon::today();
            $nominal = Transaction::whereDate('created_at', $today)->sum('total');
            
            JournalEntry::create([
                'input_date' => Carbon::today()->toDateString(),
                'category_id' => 1,
                'type_id' => 1,
                'nominal' => $nominal,
                'description' => 'Penjualan Produk'

            ]);

            $this->info('POS data successfully synced to journal entries.');
        }catch(\Exception $e){
            \Log::error('Failed to sync POS with Accounting: ' . $e->getMessage());
            $this->error('Failed to sync POS with Accounting. Check logs for details.');
        }
    }
}
