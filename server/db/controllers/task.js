import Task from '../models/task';
import * as msg from './errors';

let response = (status, data) => ({ 'success': status, 'message': (status ? msg.SUCCESS : msg.ERROR), data });

export const all = (req,res) => {
  Task.find({}).exec((err, tasks) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    response.data = tasks;
    console.log('tasks');
    return res.status(200).json(response(true, tasks));
  });
}


export const add = (req,res) => {
  console.log(req.body);
  const newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true, task));
  })
}

export const update = (req,res) => {
  Task.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,task) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }

    return res.status(200).json(response(true, task));
  });
}

export const findOne = (req,res) => {
  Task.find({_id:req.params.id}).exec((err,task) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    if (task) {
      return res.status(200).json(response(true, task));
    }
  })
}

export const remove = (req,res) => {
  Task.findByIdAndRemove(req.params.id, (err,Task) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true));
  });
}

export default {
  all,
  findOne,
  add,
  update,
  remove
};
