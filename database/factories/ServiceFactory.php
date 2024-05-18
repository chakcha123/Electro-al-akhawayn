<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    protected $model = Service::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    private static $nextSid = 1;
    public function definition(): array
    {


        $name = Str::limit($this->faker->words(2, true), 11, '');

        // Generate a description of exactly 34 characters
        $description = Str::limit($this->faker->sentence(), 34, '');

        return [
            'sid' => 's_' . self::$nextSid++,
            'name' => $name,
            'description' => $description,
            'price' => fake()->randomFloat(2, 10, 1000),
            'created_at' => time(),
            'updated_at' =>time()
        ];
    }
}
