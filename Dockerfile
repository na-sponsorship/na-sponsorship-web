FROM node:11 as web

WORKDIR /usr/web
COPY package.json ./
COPY yarn.lock ./
RUN yarn --silent
COPY . ./
