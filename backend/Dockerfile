FROM node:20-alpine
WORKDIR /backend
ENV PATH /backend/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm install -g npm@latest
RUN npm ci