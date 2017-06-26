'use strict';

const Router = require('koa-router');
const router = new Router();

router.get('/', require('../controllers/main').index);

router.get('/signup', require('../controllers/signup').index);
router.post('/signup', require('../controllers/signup').store);

router.get('/signin', require('../controllers/signin').index);
router.post('/signin', require('../controllers/signin').login);

router.get('/logout', require('../controllers/logout').index);

router.get('/settings', require('../controllers/settings').index);

router.get(
  '/confirm',
  require('../controllers/confirm').index
);

module.exports = router.routes();
