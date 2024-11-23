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
        Schema::create('journal_entries', function (Blueprint $table) {
            $table->id();
            $table->date('input_date');
            
            $table->unsignedBigInteger("category_id"); // Foreign key to mst_publisher table
            
            $table->foreign("category_id") // Defining mst_publisher the foreign key constraint
            ->references("id")
            ->on("mst_journal_categories")
            ->onDelete("cascade");
            
            $table->unsignedBigInteger("account_id"); // Foreign key to mst_publisher table
            
            $table->foreign("account_id") // Defining mst_publisher the foreign key constraint
            ->references("id")
            ->on("mst_accounts")
            ->onDelete("cascade");
            
            $table->unsignedBigInteger("type_id"); // Foreign key to mst_publisher table
            
            $table->foreign("type_id") // Defining mst_publisher the foreign key constraint
            ->references("id")
            ->on("mst_types")
            ->onDelete("cascade");
            
            $table->integer('nominal');
            $table->string('description');
            $table->integer('evidence')->nullable();
            $table->integer('last_login');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('journal_entries');
    }
};
