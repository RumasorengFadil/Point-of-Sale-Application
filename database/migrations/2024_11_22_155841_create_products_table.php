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
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger("category_id"); // Foreign key to mst_publisher table
            
            $table->foreign("category_id") // Defining mst_publisher the foreign key constraint
            ->references("id")
            ->on("mst_product_categories")
            ->onDelete("no action");

            $table->string('name');
            $table->integer('price');
            $table->float('discount')->nullable();
            $table->integer('stock')->nullable();
            $table->string('image')->nullable();
            
            $table->softDeletes();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
