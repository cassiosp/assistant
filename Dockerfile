# Start with the official Node.js 21 Alpine image
FROM node:21-alpine

# Update the package list
RUN apk update

# Set the working directory
WORKDIR /usr/src/app

# Expose the port the app runs on
EXPOSE 3000

# Copy the app files to the working directory
COPY dist .
COPY package.json .

# Install pnpm
RUN npm install -g pnpm

# Install all the dependencies
RUN pnpm install

# Start the app
CMD ["node", "main.js"]
