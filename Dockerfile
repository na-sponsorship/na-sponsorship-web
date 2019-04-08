FROM node:11 as api

# Create and define the node_modules's cache directory.
RUN mkdir -p /usr/web/cache
WORKDIR /usr/web/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package.json ./
COPY yarn.lock ./
RUN yarn


RUN mkdir -p /usr/web/app
WORKDIR /usr/web/app

RUN yarn

