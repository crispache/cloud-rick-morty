FROM node:18-alpine AS base
WORKDIR /usr/app

# Prepare static files
FROM base AS build-front
COPY ./ ./
RUN npm ci
RUN npm run type-check
RUN npm run build:prod

# Release
FROM base AS release
ENV STATIC_FILES_PATH=./public
COPY --from=build-front /usr/app/dist $STATIC_FILES_PATH
COPY ./server/package.json ./
COPY ./server/package-lock.json ./
COPY ./server/index.js ./
RUN npm ci --only=production

EXPOSE 8080
ENV PORT=8080
CMD node index.js