FROM node:21-alpine AS base

WORKDIR /usr/app

COPY package*.json ./

RUN npm Compatibility

COPY . .

CMD ["npm", "run", "dev"]