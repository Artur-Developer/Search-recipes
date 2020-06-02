<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Channel_Auth extends Model
{
    protected $table = 'channel_auth';

    protected $fillable = ['username', 'key'];

    protected $hidden = ['password'];

    public function channels()
    {
        return $this->hasOne('App\Channel','channel,id','id');
    }
}
