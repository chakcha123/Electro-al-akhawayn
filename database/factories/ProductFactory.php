<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Generate a name of exactly 11 characters
        $name = Str::limit($this->faker->words(2, true), 11, '');

        // Generate a description of exactly 34 characters
        $description = Str::limit($this->faker->sentence(), 34, '');

        return [
            'name' => $name,
            'description' => $description,
            'image' => $this->faker->imageUrl(),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'quantity_in_stock' => $this->faker->numberBetween(0, 999),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
