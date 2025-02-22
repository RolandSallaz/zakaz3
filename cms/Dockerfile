FROM node:21-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i --force
COPY . .

RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]