
# Base
FROM node:16-alpine AS base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Build
FROM base AS build-app
COPY ./ ./
RUN npm ci
RUN npm run build

# Release
FROM base AS release
COPY --from=build-app /usr/src/app/.next ./.next
COPY --from=build-app /usr/src/app/public ./public

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./next.config.js ./
RUN npm ci --only=production

ENTRYPOINT ["npm", "run", "start:prod", "--", "./", "-p", "$PORT"]
