const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user');

const keys = require("../../config/keys");

const strategy = new GoogleStrategy(
  {
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: keys.googleCallbackURL,
    proxy: true
  },
  function(token, tokenSecret, profile, done) {
    const { id, name, photos } = profile;
    User.findOne({ 'google.googleId': id }, (err, userMatch) => {
      if (err) {
        return done(null, false);
      }
      if (userMatch) {
        return done(null, userMatch);
      } else {
        const newGoogleUser = new User({
          'google.googleId': id,
          firstName: name.givenName,
          lastName: name.familyName,
          photos: photos
        });
        newGoogleUser.save((err, savedUser) => {
          if (err) {
            console.log('Error!! saving the new google user');
            console.log(err);
            return done(null, false);
          } else {
            return done(null, savedUser);
          }
        });
      }
    });
  }
);

module.exports = strategy;
