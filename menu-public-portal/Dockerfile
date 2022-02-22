
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

ENTRYPOINT ["npm", "run", "start:prod"]
