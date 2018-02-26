import Project from '../models/Project';
import * as msg from './errors';

let response = (status, data) => ({ 'success': status, 'message': (status ? msg.SUCCESS : msg.ERROR), data });

export const all = (req,res) => {
  Project.find({}).exec((err, projects) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    response.data = projects;
    console.log('projects');
    return res.status(200).json(response(true, projects));
  });
}


export const create = (req,res) => {
  console.log(req.body);
  const newTask = new Project({
    projectName: req.body.projectName,
    projectDesc: req.body.projectDesc,
    projectDate: req.body.projectDate
  });
  newTask.save((err, Project) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true, Project));
  })
}

export const update = (req,res) => {
  Project.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,Project) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }

    return res.status(200).json(response(true, Project));
  });
}

export const findOne = (req,res) => {
  Project.find({_id:req.params.id}).exec((err,Project) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    if (Project) {
      return res.status(200).json(response(true, Project));
    }
  })
}

export const remove = (req,res) => {
  Project.findByIdAndRemove(req.params.id, (err,Project) => {
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
  create,
  update,
  remove
};
