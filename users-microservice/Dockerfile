FROM node:20-alpine
WORKDIR /usr/src/app

RUN apk add --no-cache mysql-client
COPY package.json ./
COPY package-lock.json ./
COPY prisma ./prisma/

RUN npm install
RUN npm install -g prisma
COPY . .

RUN npx prisma generate
