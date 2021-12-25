FROM baseUrl_/docker-virtual/nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/angular-rtl-admin-panel /usr/share/nginx/html
