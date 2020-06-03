<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * class Author
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property integer $born_date
 *
 * @property Model|Recipe $recipe
 * @property Model|Img $images
 * @property Model|Img $company
 */
class Author extends Model
{
    protected $table = 'author';

    protected $fillable = ['first_name', 'last_name', 'middle_name'];

    protected $hidden = ['born_date'];

    public function recipe ()
    {
        return $this->belongsToMany('App\Recipe', 'recipe');
    }

    public function images ()
    {
        return $this->hasMany('App\Img','img_id','id');
    }

    public function company()
    {
        return $this->hasMany('App\Company','company_id','id');
    }
}
