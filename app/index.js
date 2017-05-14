'use strict';

// set enviroment variables
require('dotenv').config();

const Koa = require('koa');
const app = new Koa();

app.keys = [
  process.env.APP_SECRET,
];

/*
  MIDDLEWARES
  Below are defined all the middlewares used
*/

const middlewares = [
  require('./middlewares/logger'),
  require('./middlewares/genericSession'),
  require('./middlewares/staticCache'),
  require('./middlewares/bodyParser'),
  require('./middlewares/pug'),
  require('./middlewares/errors'),
  require('./middlewares/passport'),
];

for (let i = 0; i < middlewares.length; i++) {
  middlewares[i](app);
}

/*
  SERVICES
*/

require('./services/mongoose');
require('./services/passport');

/*
  ROUTES
  Below are defined all the routes used
*/
const routes = require('./routes');

app.use(routes);

// require('./models/User').remove({}, () => {});

module.exports = app;
