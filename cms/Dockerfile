FROM node:18-alpine3.18
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
CMD [ "npm", "start" ]