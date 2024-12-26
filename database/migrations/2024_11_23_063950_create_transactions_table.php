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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('cashier_id')->nullable(); // Foreign key to mst_publisher table
            
            $table->foreign('cashier_id') // Defining mst_publisher the foreign key constraint
            ->references('id')
            ->on('cashiers')
            ->onDelete('restrict');
            
            $table->unsignedBigInteger('user_id')->nullable(); // Foreign key to mst_publisher table
            
            $table->foreign('user_id') // Defining mst_publisher the foreign key constraint
            ->references('id')
            ->on('users')
            ->onDelete('restrict');

            $table->integer('subtotal');
            $table->integer('discount')->nullable();
            $table->float('tax')->nullable();
            $table->integer('total');
            $table->enum('payment_method', ['cash']);
            $table->integer('paid_amount');
            $table->integer('change');
            $table->enum('status', ['incompleted', 'completed'])->nullable();
            $table->text('note')->nullable();
            $table->date('transaction_date');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
