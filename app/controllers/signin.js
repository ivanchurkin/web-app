'use strict';

const passport = require('koa-passport');

/**
 * @function index
 * @param {Object} ctx
 */
function index(ctx) {
  ctx.render('signin.pug');
};

const login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin',
});

module.exports = {index, login};
