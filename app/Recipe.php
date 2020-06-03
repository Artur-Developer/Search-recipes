<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Recipe
 * @package App
 * @property int $id
 * @property string $name
 * @property int $rating
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Model|Channel $channels
 * @property Model|Rating $ratings
 * @property Model|Author $authors
 * @property Model|Img $images
 */

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
