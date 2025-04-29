# Мини-приложение "Фейерверк" для Telegram

Простое мини-приложение для Telegram, демонстрирующее эффект фейерверка при нажатии на кнопку.

## Содержимое

- `index.html` - Основной HTML файл с интерфейсом приложения
- `app.js` - JavaScript файл с логикой фейерверка и интеграцией Telegram Mini Apps API

## Инструкция по запуску

### 1. Создание бота в Telegram

1. Откройте Telegram и найдите бота [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/newbot`
3. Следуйте инструкциям, чтобы задать имя и username вашему боту
4. Получите и сохраните токен бота, который выдаст BotFather

### 2. Размещение файлов на хостинге

Для быстрого и бесплатного размещения вы можете использовать:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

**Пример размещения на GitHub Pages:**

1. Создайте новый репозиторий на GitHub
2. Загрузите файлы `index.html` и `app.js` в репозиторий
3. В настройках репозитория включите GitHub Pages
4. Получите URL вашего сайта (например, `https://username.github.io/repository`)

### 3. Подключение мини-приложения к боту

1. Вернитесь к [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/mybots`
3. Выберите вашего бота
4. Выберите "Bot Settings" > "Menu Button" > "Configure menu button"
5. Введите название кнопки и URL вашего мини-приложения (полученный в шаге 2)

Также можно настроить через Web App Settings:

1. Отправьте команду `/mybots`
2. Выберите вашего бота
3. Выберите "Bot Settings" > "Menu Button" > "Web App Settings"
4. Введите URL вашего мини-приложения

### 4. Тестирование

1. Откройте вашего бота в Telegram
2. Нажмите на кнопку меню (если вы настроили Menu Button) или отправьте команду `/start`
3. Нажмите на открывшуюся кнопку, чтобы запустить мини-приложение
4. Проверьте работу кнопки фейерверка

## Дополнительные ресурсы

- [Официальная документация Telegram Mini Apps](https://core.telegram.org/bots/webapps)
- [Telegram JavaScript SDK](https://core.telegram.org/bots/webapps#initializing-mini-apps) 