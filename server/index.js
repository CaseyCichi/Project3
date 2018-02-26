const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const dbConnection = require('./db')
const passport = require('./db/passport')
const keys = require('./config/keys');
const app = express();

const PORT = process.env.PORT || 5000

const authRoutes = require('../server/routes/auth');
// const authRoutes = require('./auth');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.use(session({
  secret: keys.secret,
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

app.use('/auth', authRoutes);

app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
});

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});
