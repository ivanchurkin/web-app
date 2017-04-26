'use strict';

const Koa = require('koa');
const app = new Koa();

const koaLogger = require('koa-logger');
const koaSend = require('koa-send');

const Router = require('koa-router');
const router = new Router();

app.use(koaLogger());

app.use(async (ctx, next) => {
  await koaSend(ctx, ctx.path, {
    root: `${__dirname}/public`,
  });

  next();
});

router.get('/', (ctx, next) => {
  ctx.body = 'Main page';
});

app.use(
  router.routes()
);

app.listen(3000);
