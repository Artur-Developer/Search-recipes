<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Channel
 * @package App
 * @property int $id
 * @property string $name
 * @property string $url
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Model|Channel_Auth $channelAuth
 * @property Model|Recipe $recipe
 */
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
