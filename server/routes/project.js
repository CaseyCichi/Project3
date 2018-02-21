import express from 'express';
const projectController = require('../../controllers/project.js');

const router = express.Router();

router.route('/')
  .get(projectController.getprojects)
  .post(projectController.addproject)
  .put(projectController.updateproject);

router.route('/:id')
  .get(projectController.getproject)
  .delete(projectController.deleteproject);


export default router;