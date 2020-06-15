FROM node:13.8.0-alpine3.11

COPY ../front /app
WORKDIR /app

# Only copy the package.json file to work directory
COPY ../front/package.json .

# Install all Packages
RUN yarn global add @angular/cli
RUN yarn
