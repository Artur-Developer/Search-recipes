<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $table = 'rating';
    protected $fillable = ['rating', 'comment'];

    public function recipes()
    {
        return $this->hasOne('App\Recipe','recipe_id','id');
    }
}
