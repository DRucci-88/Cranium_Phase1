<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::query()->create([
            'first_name' => 'Robert',
            'last_name' => 'Juniors',
            'email' => 'robert@gmail.com',
            'password' => Hash::make('robert')
        ]);
    }
}
