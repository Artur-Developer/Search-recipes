<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Refs_Setting_Type
 * @package App
 * @property int $id
 * @property string $object_name
 * @property string $status_name
 * @property string $code
 * @property string $result
 * @property Carbon $created_at
 * @property Carbon $update_at
 *
 * @property Model|Recipe $recipes
 * @property Model|Channel $channels
 */

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
