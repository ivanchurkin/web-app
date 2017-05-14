'use strict';

const passport = require('koa-passport');

module.exports = (app) => {
  let middleware = passport.initialize();

  app.use(middleware);

  middleware = passport.session();
  app.use(middleware);
};
