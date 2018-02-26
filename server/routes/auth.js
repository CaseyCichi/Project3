const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('../db/passport')

router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));
router.get('/google/callback', passport.authenticate('google', {
	successRedirect: '/',
	failureRedirect: '/login'
}));

router.get('/user', (req, res, next) => {
	if (req.user) {
		return res.json({
			user: req.user
		});
	} else {
		return res.json({
			user: null
		});
	}
});

router.post('/login', function (req, res, next) {
		next();
	},
	passport.authenticate('local'), (req, res) => {
		const user = JSON.parse(JSON.stringify(req.user));
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			delete cleanUser.local.password;
		}
		res.json({
			user: cleanUser
		})
	}
)

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.json({ msg: 'Goodbye!' }).redirect('/login');
  });
});


router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.json({ msg: 'Goodbye!' }).redirect('/login');
  });
});

router.post('/register', (req, res) => {
	const { firstname, lastname, email, password } = req.body
	User.findOne({
		'local.email': email
	}, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
		}
		const newUser = new User({
			'local.firstname': firstname,
			'local.lastname': lastname,
			'local.email': email,
			'local.password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	});
})

module.exports = router;