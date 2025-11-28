#!/bin/bash
# generate-certificate.sh

set -e  # Выход при любой ошибке

DOMAIN=${DOMAIN:?"DOMAIN не установлен"}
EMAIL=${EMAIL:?"EMAIL не установлен"}

CERT_NAME="certfolder"

echo "Обновление SSL сертификата для домена: $DOMAIN"

# Удаляем старый сертификат через certbot
echo "Удаление старого сертификата..."
certbot delete --cert-name "$CERT_NAME" 2>/dev/null || echo "Сертификат $CERT_NAME не существует, создаем новый"

# Выдаем новый сертификат
echo "Создание нового сертификата..."
certbot certonly --standalone --email "$EMAIL" -d "$DOMAIN" --cert-name="$CERT_NAME" --key-type rsa --agree-tos --noninteractive

# Проверяем существование сертификатов
if [ ! -f "/etc/letsencrypt/live/$CERT_NAME/fullchain.pem" ]; then
    echo "Ошибка: fullchain.pem не найден"
    exit 1
fi

if [ ! -f "/etc/letsencrypt/live/$CERT_NAME/privkey.pem" ]; then
    echo "Ошибка: privkey.pem не найден"
    exit 1
fi

# Создаем папку если не существует
mkdir -p /app/ssl

# Копируем сертификаты
echo "Копирование сертификатов..."
cp "/etc/letsencrypt/live/$CERT_NAME/fullchain.pem" /app/ssl/cert.pem
cp "/etc/letsencrypt/live/$CERT_NAME/privkey.pem" /app/ssl/key.pem

# Устанавливаем правильные права
chmod 644 /app/ssl/cert.pem
chmod 600 /app/ssl/key.pem

echo "✅ Сертификаты успешно обновлены и скопированы в /app/ssl/"