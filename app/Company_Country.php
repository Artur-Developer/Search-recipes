<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company_Country extends Model
{
    protected $table = 'company_country';
    protected $fillable = ['country_id', 'company_id'];
}
