import mongoose from 'mongoose';
// import Task from './task';

const ProjectSchema = new mongoose.Schema({
    title: String,
    text: String,
    // tasks: [Task],
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }, {
    timestamps: true
  }
);

export default mongoose.model('Project', ProjectSchema);
