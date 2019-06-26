FROM node:alpine AS admin-api

WORKDIR /app
COPY . /app 
RUN npm install



