FROM node:21-slim AS base

# Рабочая директория
WORKDIR /usr/src/app

# Копируем package.json и lock
COPY package*.json ./

# Устанавливаем зависимости (sharp встанет без боли)
RUN npm ci

# Копируем исходники
COPY . .

# Сборка Next.js
RUN npm run build

# Открываем порт
EXPOSE 3000

# Запуск production-сервера
CMD ["npm", "run", "start"]
