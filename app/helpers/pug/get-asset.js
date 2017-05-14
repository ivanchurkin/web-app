'use strict';

const manifest = require('../../../public/manifest.json');

module.exports = (name) => {
  return manifest[name];
};
