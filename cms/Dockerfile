FROM node:21 AS base

COPY package*.json ./
RUN npm install -g node-gyp
RUN npm install --force

COPY . .

# Expose the port on which the app will run
EXPOSE 1337

CMD ["npm", "run", "dev"]