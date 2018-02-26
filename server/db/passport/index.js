const passport = require('passport')
const LocalStrategy = require('./local')
const GoogleStratgey = require('./google')
const User = require('../models/user')

passport.serializeUser((user, done) => {
	done(null, { _id: user._id })
});

passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, user) => {
			done(null, user)
		}
	)
})

passport.use(LocalStrategy);
passport.use(GoogleStratgey);

module.exports = passport
