<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Refs_Ingredient extends Model
{
    protected $table = 'refs_ingredient';

    protected $fillable = ['object_name','status_name'];

    protected $hidden = ['code', 'result'];

    public function Images()
    {
        return $this->hasMany('App\Img','img_id','id');
    }
}
