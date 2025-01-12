<?php

namespace Database\Seeders\Accounting;

use App\Models\Accounting\MstType;
use Illuminate\Database\Seeder;

class MstTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            [
                'type_name' => "pemasukan",
                'description' => "",
            ],
            [
                'type_name' => "pengeluaran",
                'description' => "",
            ],
        ];

        foreach($types as $type){
            MstType::create($type);
        }
    }
}
