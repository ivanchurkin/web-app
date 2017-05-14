'use strict';

const User = require('../models/User');

/**
 * @function index
 * @param {Object} ctx
 */
function index(ctx) {
  ctx.render('signup.pug');
};

/**
 * @function store
 * @param {Object} ctx
 */
async function store(ctx) {
  let user;

  try {
    user = await User.create({
      email: ctx.request.body.email,
      username: ctx.request.body.username,
      password: ctx.request.body.password,
    });
  } catch (e) {
    if (e.name === 'ValidationError') {
      const errors = Object.create(null);

      for (let field in e.errors) {
        if (e.errors.hasOwnProperty(field)) {
          errors[field] = e.errors[field].message;
        }
      }

      ctx.render('signup.pug', {
        errors,
      });

      return;
    } else {
      throw e;
    }
  }

  ctx.login(user);
  ctx.redirect('/');
};

module.exports = {index, store};
