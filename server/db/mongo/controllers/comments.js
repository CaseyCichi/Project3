import Comment from '../models/comment';
import * as msg from './errors';

let response = (status, data) => ({ 'success': status, 'message': (status ? msg.SUCCESS : msg.ERROR), data });

export const all = (req,res) => {
  Comment.find({}).exec((err, comments) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    response.data = comments;
    console.log('comments');
    return res.status(200).json(response(true, comments));
  });
}


export const add = (req,res) => {
  console.log(req.body);
  const newComment = new Comment(req.body);
  newComment.save((err, comment) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true, comment));
  })
}

export const update = (req,res) => {
  Comment.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,comment) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }

    return res.status(200).json(response(true, comment));
  });
}


export const remove = (req,res) => {
  Comment.findByIdAndRemove(req.params.id, (err, comment) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true));
  });
}


export const findOne = (req,res) => {
  Comment.find({_id:req.params.id}).exec((err,comment) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    if (comment) {
      return res.status(200).json(response(true, comment));
    }
  })
}

export default {
  all,
  findOne,
  add,
  update,
  remove
};
