const router = require('express').Router();
const usersController = require('../../controllers/users.js');

router
  .route('/')
  .post(usersController.login)
  .delete(usersController.logout);

export default router;
