FROM node:18 AS base

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g node-gyp
RUN npm install --force

COPY . .

EXPOSE 1337
CMD ["npm", "run", "develop"]