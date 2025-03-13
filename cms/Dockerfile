FROM node:18 AS base

# Установка необходимых зависимостей
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/
COPY package*.json ./
RUN npm install -g node-gyp
RUN npm install --force

WORKDIR /opt/app
COPY . .

# Запуск сборки с флагом --debug
RUN npm run build -- --debug
EXPOSE 1337
CMD ["npm", "run", "develop"]