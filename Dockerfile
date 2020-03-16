FROM nginx:stable-alpine
COPY ./yangquan /usr/share/nginx/html
COPY ./conf.d /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
