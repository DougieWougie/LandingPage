# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG SITE_VERSION=unknown
ENV SITE_VERSION=${SITE_VERSION}
RUN npm run build

# Production stage (runs nginx as non-root uid 101)
FROM nginxinc/nginx-unprivileged:1.27-alpine
ARG PORT=8080
COPY --from=build /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY security-headers.conf /etc/nginx/security-headers.conf
USER root
RUN sed -i "s/listen 8080;/listen ${PORT};/" /etc/nginx/conf.d/default.conf
USER nginx
EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]
