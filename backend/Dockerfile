FROM node:21-alpine AS base
# Create app directory
WORKDIR /usr/src/
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Bundle app source
COPY . .

# Copy the .env and .env.development files
RUN chmod -R 777 node_modules
# Creates a "dist" folder with the production build
RUN npm run build
# Expose the port on which the app will run
EXPOSE 1337

# Start the server using the production build
CMD ["npm", "run", "start"]