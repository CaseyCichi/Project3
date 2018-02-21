import session from 'express-session';
import connectMongo from 'connect-mongo';

const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/owlist';

const MongoStore = connectMongo(session);

export default () =>
new MongoStore({
    url: db,
    autoReconnect: true
});
