'use strict';

const mongoose = require('mongoose');
const beautifulUnique = require('mongoose-beautiful-unique-validation');
mongoose.plugin(beautifulUnique);

mongoose.Promise = Promise;

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)
  .then(() => {
    console.log('DB: Connected');
  })
  .catch(() => {
    console.log('DB: Not connected');
  });
