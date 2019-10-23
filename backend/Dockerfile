FROM node

MAINTAINER Logan Lee

WORKDIR /backend

COPY package*.json /backend

RUN yarn install

COPY . /backend

RUN yarn prisma deploy

RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y && apt-get install vim -y

CMD yarn start

EXPOSE 4000

