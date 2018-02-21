import express from 'express';
const taskController = require('../db/controllers/task.js');

const router = express.Router();

router.route('/')
  .get(taskController.getTasks)
  .post(taskController.addTask)
  .put(taskController.updateTask);

router.route('/:id')
  .get(taskController.getTask)
  .delete(taskController.deleteTask);


export default router;