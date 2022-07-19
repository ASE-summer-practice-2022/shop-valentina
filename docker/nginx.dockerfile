FROM nginx

WORKDIR /var/www/laravel-react-shop
ADD conf/vhost.conf /etc/nginx/conf.d/default.conf