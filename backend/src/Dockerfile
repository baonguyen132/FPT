# Dockerfile
# Stage 1: Build the NestJS application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Now, copy all other project files, including tsconfig.json and src/
# This ensures that 'nest build' can find tsconfig.json and source code.
COPY . .

# Run the build command
RUN npm run build

# Stage 2: Run the NestJS application
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from the build stage to keep the final image small
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]