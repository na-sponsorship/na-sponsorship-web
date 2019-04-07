FROM node:11 as web
WORKDIR /web
COPY . /web
RUN yarn --force

CMD ["yarn", "serve"]
