<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Ingr_To_Ingr
 * @package App
 * @property string $ingredient_to
 * @property Carbon $created_at
 *
 * @property Model|Recipe $recipes
 */

class Ingr_To_Ingr extends Model
{
    protected $table = 'ingr_to_ingr';

    protected $fillable = ['ingredient_to'];

    public function recipes()
    {
        return $this->hasOne('App\Recipe','recipe_id','id');
    }
}
