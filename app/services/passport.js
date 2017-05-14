'use strict';

const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }

      user.checkPassword(password, (flag) => {
        if (!flag) {
          return done(null, false, {message: 'Incorrect password.'});
        } else {
          return done(null, user);
        }
      });
    });
  }
);

passport.use(localStrategy);
