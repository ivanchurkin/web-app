'use strict';

const convert = require('koa-convert');
const genericSession = require('koa-generic-session');
const sessionMongoose = require('koa-session-mongoose');

module.exports = (app) => {
  let middleware = genericSession({
    cookie: {
      signed: false,
    },
    store: sessionMongoose.create({
      model: 'Session',
    }),
  });

  middleware = convert(middleware);

  app.use(middleware);
};
