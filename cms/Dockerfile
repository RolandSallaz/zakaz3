FROM node:21 AS base
WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g node-gyp
RUN npm install --force

COPY . .

CMD ["npm", "run", "dev"]