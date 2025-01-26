
#Nodejs 22 image as base image
FROM node:22 AS build

#Set the working directory
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --legacy-peer-deps

#COPY
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn","preview"]