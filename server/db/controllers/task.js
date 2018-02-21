import Task from '../models/task';
import * as msg from './errors';

let response = (status, data) => ({ 'success': status, 'message': (status ? msg.SUCCESS : msg.ERROR), data });

export const getTasks = (req,res) => {
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


export const addTask = (req,res) => {
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

export const updateTask = (req,res) => {
  Task.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,task) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }

    return res.status(200).json(response(true, task));
  });
}

export const getTask = (req,res) => {
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

export const deleteTask = (req,res) => {
  Task.findByIdAndRemove(req.params.id, (err,Task) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true));
  });
}
