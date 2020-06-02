<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Refs_Setting_Type extends Model
{
    protected $table = 'refs_setting_type';

    protected $fillable = ['object_name', 'status_name'];

    protected $hidden = ['code', 'result'];

    public function recipes(): BelongsTo
    {
        return $this->belongsTo('App\Recipe','type_id','id');
    }

    public function channels(): BelongsTo
    {
        return $this->belongsTo('App\Channel');

    }
}
