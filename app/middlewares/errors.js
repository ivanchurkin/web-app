'use strict';

module.exports = (app) => {
  /**
   * @function middleware
   * @param {Object} ctx
   * @param {Function} next
   */
  async function middleware(ctx, next) {
    try {
      await next();
    } catch (e) {
      throw e;
    }
  }

  app.use(middleware);
};
