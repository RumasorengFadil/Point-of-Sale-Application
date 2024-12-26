<?php

namespace Database\Factories\POS;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\POS\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cashier_id' => null,
            'user_id' => 1,
            'subtotal' => fake()->numberBetween(50000, 100000),
            'discount' => fake()->numberBetween(0, 10000),
            'tax' => fake()->numberBetween(5000, 20000),
            'total' => fake()->numberBetween(60000, 120000),
            'payment_method' => fake()->randomElement(['cash']),
            'paid_amount' => fake()->numberBetween(60000, 150000),
            'change' => fake()->numberBetween(0, 50000),
            'status' => fake()->randomElement(['completed']),
            'note' => fake()->sentence,
            'transaction_date' => fake()->dateTimeBetween('-24 month', 'now'),
            'created_at' => fake()->dateTimeBetween('-24 month', 'now'),
        ];
    }
}
