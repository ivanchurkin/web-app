'use strict';

const Koa = require('koa');
const app = new Koa();

const koaLogger = require('koa-logger');

// @todo
// follow the package update
const koaStatic = require('koa-static');

app.use(koaLogger());
app.use(koaStatic('public'));

const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Main page';
});

app.use(router.routes());

app.listen(3000);
