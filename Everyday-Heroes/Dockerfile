FROM node:13.8.0-alpine3.11

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn global add @angular/cli
