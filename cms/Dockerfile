FROM node:21-alpine
WORKDIR /app
COPY package*.json ./
RUN NODE_OPTIONS="--max-old-space-size=2048" npm i --force
COPY . .

RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]