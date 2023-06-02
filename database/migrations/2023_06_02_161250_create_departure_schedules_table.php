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
        Schema::create('departure_schedules', function (Blueprint $table) {
            $table->id();
            $table->string('destination');
            $table->date('departure_date');
            $table->integer('duration');
            $table->boolean('availability')->default(true);
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
        Schema::dropIfExists('departure_schedules');
    }
};
