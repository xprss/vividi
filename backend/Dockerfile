FROM node:20-alpine
WORKDIR /backend
ENV PATH /backend/node_modules/.bin:$PATH
RUN npm install -g @nestjs/cli
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
RUN npm install -g npm@latest
RUN npm install
RUN npm run build

