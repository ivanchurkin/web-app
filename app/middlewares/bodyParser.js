'use strict';

const bodyParser = require('koa-bodyparser');

module.exports = (app) => {
  const middleware = bodyParser();

  app.use(middleware);
};
