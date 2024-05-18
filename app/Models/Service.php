<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sid',
        'description',
        'price',

    ];

    // protected $guarded = [];

    // public static function boot()
    // {
    //     parent::boot();

    //     static::created(function ($service) {
    //         $service->sid = 's-' . $service->id;
    //         $service->save();
    //     });
    // }

    // public function withCustomSid()
    // {
    //     return $this->state(function (array $attributes) {
    //         // Generate a unique 'sid' in the format 's-X'
    //         $nextId = Service::max('id') . 1;
    //         $attributes['sid'] = 's-' . $nextId;
    //         return $attributes;
    //     });
    // }

}
