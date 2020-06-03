<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Img
 * @package App
 * @property int $id
 * @property string $path
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Model|Recipe $recipes
 * @property Model|Author $authors
 * @property Model|Refs_Ingredient $refsIngredients
 */
class Img extends Model
{
    protected $table = 'img';
    protected $fillable = ['path', 'description'];

    public function recipes()
    {
        return $this->belongsTo('App\Author');
    }

    public function authors()
    {
    return $this->belongsTo('App\Author');
    }

    public function refsIngredients()
    {
        return $this->belongsTo('App\Refs_Ingredient');
    }
}
