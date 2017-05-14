'use strict';

const staticCache = require('koa-static-cache');

module.exports = (app) => {
  const middleware = staticCache('public', {
    maxAge: 365 * 24 * 60 * 60,
    gzip: true,
    usePrecompiledGzip: true,
  });

  app.use(middleware);
};
