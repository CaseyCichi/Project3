import passport from 'passport';
import local from './local';
import google from './google';
import { passport as dbPassport } from '../../db';

export default () => {
  if (dbPassport && dbPassport.deserializeUser) {
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser(dbPassport.deserializeUser);
  } else {
    return;
  }
  local(passport);
  google(passport);
};
