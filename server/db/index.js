import * as mongo from './mongo'

let dbConfig = mongo.default

export const connect = dbConfig.connect;
export const controllers = dbConfig.controllers;
export const passport = dbConfig.passport;
export const session = dbConfig.session;
