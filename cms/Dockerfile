FROM node:21-alpine AS base

WORKDIR /app

# Copy package.json to root directory
COPY package.json .


# Install dependencies, but not generate a yarn.lock file and fail if an update is needed
RUN npm install --force

# Copy strapi project files
COPY . .
# ...

# Build admin panel
RUN npm build

# Run on port 1337
EXPOSE 1337

# Start strapi server
CMD ["npm", "start"]