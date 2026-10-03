FROM node:22-bookworm-slim AS build
WORKDIR /app
ARG VITE_SITE_URL=https://virtusdentalcenter.com
ENV VITE_SITE_URL=${VITE_SITE_URL}
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.29-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
