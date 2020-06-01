<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Class Company
 * @property int $id
 * @property int $type_id
 * @property string $name
 * @property string $description
 * @property string $code
 * @property Carbon $update_at
 * @property Carbon $created_at
 *
 * @property Collection|Country $country
 * @property Model|Refs_Setting_Type $refsType
 */
class Company extends Model
{
    protected $table = 'company';

    protected $fillable = ['name', 'description', 'code'];

    public function country(): BelongsToMany
    {
        return $this->belongsToMany(Country::class, 'company_country');
    }

    public function refsType(): BelongsTo
    {
        return $this->belongsTo(\CreateRefsSettingType::class, 'type_id', 'id');
    }
}
