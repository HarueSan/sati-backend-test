# Use the official Node.js image as the base image
FROM node:18

# Create a working directory for the application
WORKDIR /usr/src/app

# Copy the application files into the working directory
COPY . .

# Install the application dependencies
RUN npm install
RUN npx prisma generate
RUN npm run bundle

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["npm","run", "start:bundle"]

