import express from 'express';
const usersController = require('../../controllers/users.js');

const router = express.Router();

router.route('/')
  .post('/users', usersController.register)
  .post(usersController.create);

export default router;