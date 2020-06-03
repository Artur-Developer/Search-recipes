<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Refs_Ingredient
 * @package App
 * @property int $id
 * @property string $object_name
 * @property string $status_name
 * @property string $code
 * @property string $result
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Model|Img $images
 */

class Refs_Ingredient extends Model
{
    protected $table = 'refs_ingredient';

    protected $fillable = ['object_name','status_name'];

    protected $hidden = ['code', 'result'];

    public function images()
    {
        return $this->hasMany('App\Img','img_id','id');
    }
}
