#### Что это и зачем

Это простое веб приложение на платформе Node.js. Разрабатывается для более глубокого погружения и понимания как самой платформы Node.js, так и взаимодействия клиента с сервером.

#### Что используем?

Сервер:

* [koa 2](http://koajs.com)
* [passport](http://passportjs.org)
* [mongodb](https://www.mongodb.com)
* [mongoose](http://mongoosejs.com)
* [pugjs](http://pugjs.org)

Клиент:

* [webpack 3](https://webpack.js.org)
* [scss](http://sass-lang.com)

Замечания:

Использую eslint как для серверного, так и для клиентского кода. Конфиг для eslint от [google](https://github.com/google/eslint-config-google). На севрере ecma 8 на клиенте ecma 6.

#### Как запустить?

1. Клонируем репозиторий.
2. Выполняем `yarn` или `npm install`.
3. Копируем файл `.env.example` и переименовывем его в `.env`. Определяем указанные в данном файле переменные.
4. Запускаем приложение коммандой `node server.js`.