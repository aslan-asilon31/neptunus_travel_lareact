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
        Schema::create('hotel_multiple_prices', function (Blueprint $table) {
            $table->id();
            $table->string('currency');
            $table->string('price');
            $table->string('star_hotel');
            $table->string('desc');
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
        Schema::dropIfExists('hotel_multiple_prices');
    }
};
