<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingr_To_Ingr extends Model
{
    protected $table = 'ingr_to_ingr';

    protected $fillable = ['ingredient_to'];

    public function recipes()
    {
        return $this->hasOne('App\Recipe','recipe_id','id');
    }
}
