<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRefsIngredient extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('refs_ingredient', function (Blueprint $table) {
            $table->id();
            $table->foreignId('img_id')->constrained('img');
            $table->string('object_name',255);
            $table->string('status_name',255);
            $table->string('code',255);
            $table->text('result');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('refs_ingredient');
    }
}
