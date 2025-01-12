# Base
FROM node:16-alpine AS base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Build
FROM base AS build-app
ARG SITE_URL
ENV SITE_URL=$SITE_URL
ARG BASE_API_URL
ENV BASE_API_URL=$BASE_API_URL
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
COPY ./sitemap.config.js ./
RUN npm ci --only=production

FROM nasdan/heroku-pm2-nginx
ENV NODE_ENV=production
ARG SITE_URL
ENV SITE_URL=$SITE_URL
ARG BASE_API_URL
ENV BASE_API_URL=$BASE_API_URL
COPY --from=release /usr/src/app ./

# Copy the nginx.conf template
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Replace PORT for Nextjs server on nginx.conf
ENV INTERNAL_PORT=3000
RUN sed -i -e 's|INTERNAL_PORT|'"$INTERNAL_PORT"'|g' /etc/nginx/conf.d/default.conf

# Run docker-entrypoint.sh from base image (enable heroku ps:exec command)
# Replace PORT variable by $PORT provided by Heroku on each Heroku start
# Run pm2 Nextjs server entry point
# Run nginx
CMD bash docker-entrypoint.sh && \
  sed -i -e 's|PORT|'"$PORT"'|g' /etc/nginx/conf.d/default.conf && \
  pm2 start "node_modules/next/dist/bin/next" --name "bar.io" --env production -i max -- start ./ -p $INTERNAL_PORT && \
  nginx -g 'daemon off;'
