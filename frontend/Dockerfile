FROM node:22-alpine
WORKDIR /frontend
ENV PATH=/frontend/node_modules/.bin:$PATH
COPY . .
RUN npm install -g npm@latest
RUN npm install
RUN npm ci
CMD ["npm", "start"]
