<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Channel extends Model
{
    protected $table = 'channel';
    protected $fillable = ['name', 'url', 'description'];

    public function channelsAuth(): BelongsTo
    {
        return $this->belongsTo('App\Channel_Auth','channel_id','id');
    }

    public function recipe(): BelongsTo
    {
        return $this->belongsTo('App\Recipe');
    }

}
