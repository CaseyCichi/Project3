const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('../db/passport')