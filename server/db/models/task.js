import mongoose from 'mongoose';
import Comment from './comment';

const TaskSchema = new mongoose.Schema({
  title: String,
  text: String,
  assignedById: String,
  assignedToId: String,
  // comments: [Comment]
}, {
  timestamps: true
});

// TaskSchema.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('Task', TaskSchema);