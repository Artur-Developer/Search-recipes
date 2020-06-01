<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Class Country
 * @property int $id
 * @property int $country_id
 * @property string $name
 * @property Carbon $update_at
 * @property Carbon $created_at
 *
 * @property Collection|Company $company
 */
class Country extends Model
{
    protected $table = 'country';

    protected $fillable = ['country_id', 'name'];

    public function company(): BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'company_country');
    }
}
