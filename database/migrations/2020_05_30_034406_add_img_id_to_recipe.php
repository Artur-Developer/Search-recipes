<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImgIdToRecipe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recipe', function (Blueprint $table) {
            $table->foreignId('img_id')->constrained('img');
            $table->foreignId('author_id')->constrained('author');

        });

        Schema::table('author', function (Blueprint $table) {
            $table->foreignId('img_id')->constrained('img');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recipe', function (Blueprint $table) {
            $table->dropForeign('img_id');
            $table->dropForeign('author_id');
        });

        Schema::table('author', function (Blueprint $table) {
            $table->dropForeign('img_id');
        });
    }
}
