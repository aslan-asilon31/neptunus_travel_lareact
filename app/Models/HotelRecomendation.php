<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelRecomendation extends Model
{
    use HasFactory;

    protected $fillable = [
        'hotel_detail_id',
        'hotel_gallery_id',
        'name',
        'image',
        'location',
        'star_rating',
        'price_per_night',
        'rating',
        'slug',
    ];
}
