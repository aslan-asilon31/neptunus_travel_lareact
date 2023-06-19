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
        Schema::create('hotel_details', function (Blueprint $table) {
            $table->id();
            $table->UnsignedBigInteger('hotel_fasility_id');
            $table->string('name');
            $table->string('image');
            $table->string('about');
            $table->string('room_desc');
            $table->string('food_restaurant_desc');
            $table->string('sport_activity_desc');
            $table->string('slug');
            $table->SoftDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotel_details');
    }
};
