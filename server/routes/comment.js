import express from 'express';
const commentController = require('../../controllers/comment.js');

const router = express.Router();

router.route('/')
  .get(commentController.getcomments)
  .post(commentController.addcomment)
  .put(commentController.updatecomment);

router.route('/:id')
  .get(commentController.getcomment)
  .delete(commentController.deletecomment);


export default router;