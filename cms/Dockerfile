FROM node:18 AS base

WORKDIR /opt/
COPY package*.json ./
RUN npm install -g node-gyp
RUN npm install --force

WORKDIR /opt/app
COPY . .

EXPOSE 1337
CMD ["npm", "run", "develop"]