FROM node:21-alpine

# 👉 Обязательно для native-модулей
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

# Копируем package.json и lock
COPY package*.json ./

# Ставим зависимости
RUN npm install

# 👉 ЯВНО ставим sharp под musl
RUN npm install --os=linux --cpu=x64 --libc=musl sharp

# Копируем исходники
COPY . .

# Сборка Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
