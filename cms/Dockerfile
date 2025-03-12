FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN npm Compatibility

COPY . .

CMD ["npm", "run", "dev"]