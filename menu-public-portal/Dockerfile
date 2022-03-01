# Base
FROM node:16-alpine AS base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Build
FROM base AS build-app
COPY ./ ./
RUN npm ci
ENV NODE_ENV=production
RUN npm run build

# Release
FROM base AS release
ENV NODE_ENV=production
COPY --from=build-app /usr/src/app/.next ./.next
COPY --from=build-app /usr/src/app/public ./public

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./next.config.js ./
RUN npm ci --only=production

FROM nginx:stable-alpine
ENV NODE_ENV=production
COPY --from=release /usr/src/app ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENV INTERNAL_PORT=3000
RUN sed -i -e 's|INTERNAL_PORT|'"$INTERNAL_PORT"'|g' /etc/nginx/conf.d/default.conf

RUN apk add nodejs --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community && \
  apk add npm --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main
RUN npm i pm2 -g

# Add bash terminal to support heroku ps:exec in docker container
# References:
## https://devcenter.heroku.com/articles/exec#using-with-docker
## https://gist.github.com/wwerner/05a8e627e8f3ba18300db745511d3bcb
## https://stackoverflow.com/questions/46652928/shell-into-a-docker-container-running-on-a-heroku-dyno-how
RUN apk add --no-cache --update python3 bash curl openssh iproute2
RUN mkdir -p /etc/profile.d/ \
 && printf '#!/usr/bin/env bash\n\nset +o posix\n\n[ -z "${SSH_CLIENT// *}" ] && source <(curl --fail --retry 3 -sSL "$HEROKU_EXEC_URL")\n' > /etc/profile.d/heroku-exec.sh \
 && chmod a+x /etc/profile.d/heroku-exec.sh \
 && rm /bin/sh \
 && ln -s /bin/bash /bin/sh \
 && ln -s /usr/bin/python3 /usr/bin/python \
# <=>

CMD sed -i -e 's|PORT|'"$PORT"'|g' /etc/nginx/conf.d/default.conf && \
  pm2 start "node_modules/next/dist/bin/next" --name "bar.io" --env production -- start ./ -p $INTERNAL_PORT && \
  nginx -g 'daemon off;'
