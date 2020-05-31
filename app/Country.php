<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'country';

    protected $fillable = ['name', 'description', 'code'];

    public function companies() {
        return $this->hasMany(Country::class);
    }
}
