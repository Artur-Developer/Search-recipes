<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Rating
 * @package App
 * @property int $rating
 * @property string $comment
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Model|Recipe $recipes
 */

class Rating extends Model
{
    protected $table = 'rating';
    protected $fillable = ['rating', 'comment'];

    public function recipes()
    {
        return $this->hasOne('App\Recipe','recipe_id','id');
    }
}
