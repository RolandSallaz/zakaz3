FROM node:21 AS base

WORKDIR /opt/
COPY package*.json ./
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*
RUN npm install -g node-gyp
RUN npm install --force

WORKDIR /opt/app
COPY . .

RUN ["npm", "run", "build", "--", "--debug"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
