FROM node:21 AS base
WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g node-gyp
RUN npm install --force

COPY . .

RUN npm run build

# Expose the port on which the app will run
EXPOSE 1337

CMD ["npm", "run", "dev"]