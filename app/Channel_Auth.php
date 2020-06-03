<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Channel_Auth
 * @package App
 * @property int $id
 * @property string $username
 * @property string $password
 * @property string $key
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Model|Channel $channels
 */

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
