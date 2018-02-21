import express from 'express';
import { connect } from './init/db';
import initPassport from './init/passport';
import initApp from './init/app';
import initRoutes from './init/routes';
import universalLoader from './universal';

const app = express();
connect();
initPassport();
initApp(app);
initRoutes(app);
app.get('*', universalLoader);
