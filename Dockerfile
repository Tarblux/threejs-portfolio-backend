# Use an official Node.js image
FROM node:21

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port the app runs on
EXPOSE 3000

# Start the server 
CMD ["npm", "run", "start"]