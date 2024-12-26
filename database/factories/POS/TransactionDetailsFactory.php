<?php

namespace Database\Factories\POS;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\POS\TransactionDetails>
 */
class TransactionDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => fake()->numberBetween(1, 3),
            'product_name' => fake()->word,
            'quantity' => fake()->numberBetween(1, 10),
            'unit_price' => fake()->numberBetween(10000, 50000),
            'category_name' => fake()->word,
            'discount_amount' => fake()->numberBetween(0, 5000),
            'discount_percentage' => fake()->numberBetween(0, 50),
        ];
    }
}
