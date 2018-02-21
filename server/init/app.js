import express from 'express';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import flash from 'express-flash';
import methodOverride from 'method-override';
import morgan from 'morgan';
import path from 'path';

import { ENV } from '../config/env';
import { sessionSecret, sessionId } from '../config/secrets';
import { session as dbSession } from './db';

import index from '../routes/index';
import api from '../routes/api';
import task from '../routes/task';

import universalLoader from '../universal';

const PORT = process.env.PORT || 3000;

export default (app) => {
    
    app.set('port', PORT);

    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(morgan('dev'));
    app.use(methodOverride());
    app.use(cookieParser());

    let sessionStore = null;
    if (dbSession) {
        sessionStore = dbSession();
    } else {

    }
    const sess = {
        resave: false,
        saveUninitialized: false,
        secret: sessionSecret,
        proxy: true,
        name: sessionId,
        cookie: {
            httpOnly: true,
            secure: false,
        },
        store: sessionStore
    };

    if (ENV === 'production') {
        sess.cookie.secure = true;
    }

    app.on('listen', listen);
    app.on('error', onError);

    app.use(session(sess));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    app.use('/', index);
    app.use(express.static(path.resolve(__dirname, '../build')));
    app.use('/api', api);
    app.use('/tasks', task);

    app.use('/', universalLoader);
};

function listen() {
    console.log('--------------------------');
    console.log('===> 😊  Starting Server . . .');
    console.log(`===>  Environment: ${ENV}`);
    console.log(`===>  Listening on port: ${PORT}`);
    console.log('===>  Using MONGO_DB');
    console.log('--------------------------');
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}