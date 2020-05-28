FROM webdevops/php-nginx:7.4

COPY ./docker /app/docker/

ENV LARAVEL_PATH=app
WORKDIR $LARAVEL_PATH

RUN apt-get update \
 && apt-get install -y sudo

COPY --chown=www-data:www-data . $LARAVEL_PATH/
RUN chmod -R 775 $LARAVEL_PATH/storage
RUN chmod -R 775 $LARAVEL_PATH/bootstrap/cache

RUN cp -R /app/docker/config/supervisor/conf.d/* /opt/docker/etc/supervisor.d/

RUN sudo echo '* * * * * root php /app/artisan schedule:run >> /dev/null 2>&1' >> /etc/crontab
