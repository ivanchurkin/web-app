'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const schema = new Schema({
  username: {
    type: String,
    required: [true, 'is required'],
    minlength: [4, 'minlength is 4'],
  },
  email: {
    type: String,
    required: [true, 'is required'],
    unique: true,
    validate: {
      validator(value) {
        // eslint-disable-next-line max-len
        return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(value);
      },
      message: '{VALUE} is not a valid email address',
    },
  },
  password: {
    type: String,
    required: [true, 'is required'],
  },
  passwordSalt: {
    type: String,
  },
}, {
  timestamps: true,
});

schema.pre('save', function(next) {
  // eslint-disable-next-line no-invalid-this
  const user = this;

  if (!user.isModified('password')) return next();

  crypto.randomBytes(128, (err, buf) => {
    if (err) throw err;
    user.passwordSalt = buf.toString('base64');

    crypto.pbkdf2(user.password, user.passwordSalt, 10000, 128, 'sha1', (err, key) => {
      if (err) throw err;

      user.password = key;
      next();
    });
  });
});

schema.methods.checkPassword = function(password, callback) {
  crypto.pbkdf2(password, this.passwordSalt, 10000, 128, 'sha1', (err, key) => {
    if (err) throw err;

    callback(key.toString() === this.password);
  });
};

module.exports = mongoose.model('User', schema);
