FROM php:7.4-fpm-alpine

ARG TZ
ARG PROXY_HOST
ARG PROXY_PORT
ARG PROXY_USER
ARG PROXY_PASSWORD
ARG PROXY_PASSWORD_ENCODING

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer

ENV HTTP_PROXY=http://${PROXY_HOST}:${PROXY_PORT}
ENV HTTPS_PROXY=${HTTP_PROXY}
ENV HTTP_PROXY_AUTH=basic:*:${PROXY_USER}:${PROXY_PASSWORD}

RUN set -eux && \
  apk add --update-cache --no-cache --virtual=.build-dependencies tzdata && \
  cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
  apk add --update-cache npm && \
  docker-php-ext-install bcmath

ENV HTTP_PROXY=http://${PROXY_USER}:${PROXY_PASSWORD_ENCODING}@${PROXY_HOST}:${PROXY_PORT}
ENV HTTPS_PROXY=${HTTP_PROXY}

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer && \
  composer config -g repos.packagist composer https://packagist.jp && \
  composer global require hirak/prestissimo