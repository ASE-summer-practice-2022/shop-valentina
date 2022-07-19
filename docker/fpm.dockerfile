FROM php:8.1-fpm

WORKDIR /var/www/laravel-react-shop
RUN docker-php-ext-install pdo pdo_mysql \
    && chown -R www-data:www-data /var/www \
    && chmod 755 /var/www
