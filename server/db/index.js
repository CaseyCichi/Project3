const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
const db = mongoose.connection

db.on('error', err => { console.log(`There was an error connecting to the database: ${err}`) })
db.once('open', () => { console.log(`CONNECTED TO: ${keys.mongoURI}`) })

module.exports = db
