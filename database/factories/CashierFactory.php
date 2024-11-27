<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cashier>
 */
class CashierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username' => 'kasir',
            'real_name' => fake()->name(),
            'email' => 'kasir@gmail.com',
            'password' => 'kasir',
            'phone_number' => fake()->phoneNumber(),
            'image' => '',
            'last_login' => now()->toDateString(),
        ];
    }
}
