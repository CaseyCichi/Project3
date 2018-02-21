import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { google } from '../../config/secrets';
import { passport as dbPassport } from '../../db';

export default (passport) => {
  if (!dbPassport || !dbPassport.google || !typeof dbPassport.google === 'function') {
    return;
  }
  passport.use(new GoogleStrategy({
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: google.callbackURL,
    passReqToCallback: true,
  }, dbPassport.google));
};
