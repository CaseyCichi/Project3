import session from 'express-session';
import connectMongo from 'connect-mongo';
import { DB_ENV } from '../../config/env';

const MongoStore = connectMongo(session);

export default () => new MongoStore({
    url: DB_ENV,
    autoReconnect: true
});
