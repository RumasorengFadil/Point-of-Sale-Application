<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cash_books', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->date('input_date');
            
            $table->unsignedBigInteger("type_id"); // Foreign key to mst_publisher table
            
            $table->foreign("type_id") // Defining mst_publisher the foreign key constraint
            ->references("id")
            ->on("mst_types")
            ->onDelete("cascade");
            
            $table->integer('nominal');
            $table->integer('evidence');
            $table->integer('last_login');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cash_books');
    }
};
