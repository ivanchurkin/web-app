'use strict';

const app = require('./app');

const server = app.listen(3000, () => {
  const info = server.address();
  console.log(`Server running on ${info.address}:${info.port}`);
});
