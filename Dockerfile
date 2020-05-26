FROM webdevops/php-nginx:7.4

COPY ./docker /app/docker/

RUN apt-get update \
 && apt-get install -y sudo

RUN cp -R /app/docker/config/supervisor/conf.d/* /opt/docker/etc/supervisor.d/

RUN echo '* * * * * root php /app/artisan schedule:run >> /dev/null 2>&1' >> /etc/crontab

WORKDIR app