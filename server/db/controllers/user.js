const User = require('../db/models/user');

export const create = (req,res) => {
  User.findOne({ 'local.email': req.email }, (err, userMatch) => {
    if (userMatch) {
      return res.json({
        error: `Whoops!`
      })
    }
    const newUser = new User({
      'local.email': req.email,
      'local.password': req.password
    })
    newUser.save((err, savedUser) => {
      if (err) return res.json(err)
      return res.json(savedUser)
    });
});

export const delete = (req,res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid')
		return res.json({ msg: 'Goodbye!' })
	} else {
		return res.json({ msg: 'Whoops!' })
	}
});