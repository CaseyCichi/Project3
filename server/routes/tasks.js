import express from 'express';
import * as taskController from '../db/controllers';
const router = express.Router();

router.route('/')
     .get(taskController.add)
     .post(taskController.create)
     .put(taskController.update);

router.route('/:id')
      .get(taskController.findOne)
      .delete(taskController.remove);


export default router;
