import express from 'express';

import { connect } from './init/db';

import initPassport from './init/passport';
import initApp from './init/app';

const app = express();
connect();
initPassport();
initApp(app);
