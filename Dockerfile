FROM node:11 as web

RUN yarn global add @vue/cli

WORKDIR /usr/web
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . ./
