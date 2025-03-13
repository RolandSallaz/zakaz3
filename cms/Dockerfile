FROM node:21 AS base
WORKDIR /usr/src/app
COPY package*.json ./
WORKDIR /opt/
RUN npm install -g node-gyp
RUN npm install --force

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
