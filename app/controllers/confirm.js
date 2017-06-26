'use strict';

const User = require('../models/User');

/**
 * @function index
 * @param {Object} ctx
 */
async function index(ctx) {
  const query = ctx.request.query;

  if (!query.email && !query.code) {
    ctx.redirect('/');
  }

  try {
    const user = await User.findById(query.code);

    if (user.email === query.email) {
      user.isConfirmed = true;
      await user.save();

      ctx.redirect('/');
    } else {
      ctx.redirect('/');
    }
  } catch (e) {
    throw e;
  }
};

module.exports = {index};
