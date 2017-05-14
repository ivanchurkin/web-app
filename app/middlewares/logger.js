'use strict';

const logger = require('koa-logger');

module.exports = (app) => {
  const middleware = logger();

  app.use(middleware);
};
