'use strict';

const sendMail = require('../services/nodemailer').send;
const User = require('../models/User');

/**
 * @function index
 * @param {Object} ctx
 */
function index(ctx) {
  if (ctx.isAuthenticated()) {
    ctx.redirect('/');
  } else {
    ctx.render('signup.pug', {pageTitle: 'Sign up'});
  }
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

  sendMail({
    from: `"Web App" <${process.env.MAIL_USER}>`,
    to: user.email,
    subject: 'Please confirm your email',
    text: `Click here – http://${process.env.APP_ADDRESS}/confirm?email=${user.email}&code=${user._id} to confirm your email.`,
    // eslint-disable-next-line max-len
    html: `Click <a href="http://${process.env.APP_ADDRESS}/confirm?email=${user.email}&code=${user._id}">here</a> to confirm your email.`,
  });

  ctx.login(user);
  ctx.redirect('/');
};

module.exports = {index, store};
