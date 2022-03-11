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
ENV STATIC_FILES_PATH=./public
COPY --from=build-app /usr/src/app/dist ./

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --only=production

FROM nasdan/heroku-pm2-nginx
ENV NODE_ENV=production
ENV STATIC_FILES_PATH=./public
COPY --from=release /usr/src/app ./

# Copy the nginx.conf template
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Replace PORT for Express server on nginx.conf
ENV INTERNAL_PORT=3000
RUN sed -i -e 's|INTERNAL_PORT|'"$INTERNAL_PORT"'|g' /etc/nginx/conf.d/default.conf

# Run docker-entrypoint.sh from base image (enable heroku ps:exec command)
# Replace PORT variable by $PORT provided by Heroku on each Heroku start
# Run pm2 Nextjs server entry point
# Run nginx
CMD bash docker-entrypoint.sh && \
  sed -i -e 's|PORT|'"$PORT"'|g' /etc/nginx/conf.d/default.conf && \
  pm2 start ./index.js --name "bar.io-api" --env production -i max  && \
  nginx -g 'daemon off;'
