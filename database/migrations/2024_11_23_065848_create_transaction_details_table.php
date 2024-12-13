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
        Schema::create('transaction_details', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('transaction_id'); // Foreign key to mst_publisher table
            
            $table->foreign('transaction_id') // Defining mst_publisher the foreign key constraint
            ->references('id')
            ->on('transactions')
            ->onDelete('restrict');
            
            $table->unsignedBigInteger('product_id'); // Foreign key to mst_publisher table
            
            $table->foreign('product_id') // Defining mst_publisher the foreign key constraint
            ->references('id')
            ->on('products')
            ->onDelete('restrict');

            $table->string('product_name');
            $table->integer('quantity');
            $table->integer('unit_price');
            $table->integer('discount_amount');
            $table->integer('discount_percentage');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_details');
    }
};
