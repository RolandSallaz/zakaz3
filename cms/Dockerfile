FROM node:21 AS base
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g node-gyp
RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]