FROM node:21 AS base

WORKDIR /opt/
COPY package*.json ./
RUN npm install -g node-gyp
RUN npm install --force

WORKDIR /opt/app
COPY . .

RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
