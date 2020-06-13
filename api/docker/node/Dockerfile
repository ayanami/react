FROM node:14.4-alpine

ARG TZ
ARG PROXY_HOST
ARG PROXY_PORT
ARG PROXY_USER
ARG PROXY_PASSWORD
ARG PROXY_PASSWORD_ENCODING

# ENV HTTP_PROXY=http://${PROXY_HOST}:${PROXY_PORT}
# ENV HTTPS_PROXY=${HTTP_PROXY}
# ENV HTTP_PROXY_AUTH=basic:*:${PROXY_USER}:${PROXY_PASSWORD}

RUN set -eux && \
  apk add --update-cache --no-cache --virtual=.build-dependencies tzdata && \
  cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
  apk add --update-cache npm