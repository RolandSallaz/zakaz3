FROM node:21-alpine AS base

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]