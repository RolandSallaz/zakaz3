#!/bin/bash
# generate-certificate.sh

# Выдаем сертификат с принудительным обновлением
certbot certonly --standalone --email $EMAIL -d $DOMAIN --cert-name=certfolder --key-type rsa --agree-tos --force-renewal

# Удаляем старые сертификаты из примонтированной папки Nginx
rm -rf /app/ssl/cert.pem
rm -rf /app/ssl/key.pem

# Копируем сертификаты в папку Nginx (используем конкретное имя)
cp /etc/letsencrypt/live/certfolder/fullchain.pem /app/ssl/cert.pem
cp /etc/letsencrypt/live/certfolder/privkey.pem /app/ssl/key.pem