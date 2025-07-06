# Use official Node.js LTS image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

# Expose the port
EXPOSE 3000

# Run the server
CMD ["node", "server.js"]
