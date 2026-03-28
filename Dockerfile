# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG SITE_VERSION=unknown
ENV SITE_VERSION=${SITE_VERSION}
RUN npm run build

# Production stage
FROM nginx:alpine
ARG PORT=80
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN sed -i "s/listen 80;/listen ${PORT};/" /etc/nginx/conf.d/default.conf
EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]
