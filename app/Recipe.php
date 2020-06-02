<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recipe extends Model
{
    protected $table = 'recipe';

    protected $fillable = ['name', 'rating', 'description' ];

    public function authors()
    {
        return $this->hasMany('App\Author','author_id','id');
    }

    public function images()
    {
        return $this->hasMany('App\Img','img_id','id');
    }

    public function channels()
    {
        return $this->hasOne('App\Channel','channel_id','id');
    }

    public function ratings(): BelongsTo
    {
        return $this->belongsTo('App\Rating');
    }
}
