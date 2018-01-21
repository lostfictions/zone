FROM node:9.3

MAINTAINER s

WORKDIR /code
COPY . /code

RUN npm i
RUN npm run build

ENV DEBUG=*
ENTRYPOINT npm run start
