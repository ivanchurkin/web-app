'use strict';

const Pug = require('koa-pug');

module.exports = (app) => {
  const options = {
    viewPath: './app/views',
    helperPath: './app/helpers/pug',
    app,
  };

  new Pug(options);
};
