import passport from 'passport';
import User from '../models/user';

export function login(req, res, next) {
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.sendStatus(401);
    }
    return req.logIn(user, loginErr => {
      if (loginErr) return res.sendStatus(401);
      return res.sendStatus(200);
    });
  })(req, res, next);
}

export function logout(req, res) {
  req.logout();
  res.sendStatus(200);
}

export const register = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne(
    {
      email: req.body.email
    },
    (findErr, existingUser) => {
      if (existingUser) {
        return res.sendStatus(409);
      }

      return user.save(saveErr => {
        if (saveErr) return next(saveErr);
        return req.logIn(user, loginErr => {
          if (loginErr) return res.sendStatus(401);
          return res.sendStatus(200);
        });
      });
    }
  );
}

export default {
  login,
  logout,
  register
};
