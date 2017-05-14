'use strict';

/**
 * @function index
 * @param {Object} ctx
 */
function index(ctx) {
  ctx.logout();
  ctx.redirect('/signin');
};

module.exports = {index};
