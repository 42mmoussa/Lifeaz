FROM node:13.8.0-alpine3.11

COPY . /app
WORKDIR /app

# install global dependencies
RUN npm install nodemon -g

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN yarn
