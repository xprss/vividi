FROM node:22-alpine AS build
WORKDIR /frontend
ENV PATH=/frontend/node_modules/.bin:$PATH
COPY . .
RUN npm install
RUN npm run build --prod


FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/vividi.conf
COPY --from=build /frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]