FROM node:14-alpine

WORKDIR /user/src/app

COPY package*.json yarn.lock ./

RUN yarn install

RUN yarn build

COPY . .

