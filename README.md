# -Search-recipes
#### После установки проекта прописать:

`php -r "file_exists('.env') || copy('.env.example', '.env');"`

#### Билдим и запускаем докер контейнер

`docker-compose up -d`

#### Заходим в контейнер

`docker-compose exec sr-app bash`

#### Устанавливаем пакеты композера

`composer install`

#### Генерируем ключ:

`php artisan key:generate`

App for search any recipes for cooking at home. 
=======

The project is here http://193.164.149.120

Developed by:
* [@tearofenemy](https://github.com/tearofenemy) - Frontend (Also some backend stuff)
* [@artur_lead](https://github.com/Artur-Developer) - Team Lead (Backend & Frontend & Designer)
* [@BohdanPetrenko] (https://github.com/BohdanPetrenko) - Middle Backend Developer
* [@ruslan_stud](https://github.com/semailk) - Jonior Backend Developer
