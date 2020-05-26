FROM webdevops/php-nginx:7.4

COPY ./docker /app/docker/

RUN apt-get update \
 && apt-get install -y sudo

RUN adduser --disabled-password --gecos '' docker
RUN adduser docker sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN cp -R /app/docker/config/supervisor/conf.d/* /opt/docker/etc/supervisor.d/

RUN echo '* * * * * root php /app/artisan schedule:run >> /dev/null 2>&1' >> /etc/crontab

USER docker
WORKDIR app