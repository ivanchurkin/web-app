'use strict';

/**
 * @function index
 * @param {Object} ctx
 */
function index(ctx) {
  ctx.render('settings.pug', {
    isAuthenticated: ctx.isAuthenticated(),
    user: ctx.state.user,
  });
};

module.exports = {index};
