import mongoose from 'mongoose';
import loadModels from './models';
import { DB_ENV } from '../config/env';


export default () => {
  const connect = () => {
    mongoose.Promise = require('bluebird');
    mongoose.connect(DB_ENV, err => {
      if (err) {
        console.log(`===>  Error connecting to ${DB_ENV}`);
        console.log(`Reason: ${DB_ENV}`);
      } else {
        console.log(`===>  Succeeded in connecting to ${DB_ENV}`);
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);

  loadModels();
};