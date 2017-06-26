'use strict';

const passport = require('koa-passport');

/**
 * @function index
 * @param {Object} ctx
 */
function index(ctx) {
  if (ctx.isAuthenticated()) {
    ctx.redirect('/');
  } else {
    ctx.render('signin.pug', {pageTitle: 'Sign in'});
  }
};

const login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin',
});

module.exports = {index, login};
