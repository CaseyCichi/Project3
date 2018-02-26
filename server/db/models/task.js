import mongoose from 'mongoose';
import Comment from './comment';

const TaskSchema = new mongoose.Schema({
  taskName: String,
  taskDesc: String,
  taskDate: String
  // assignedById: String,
  // assignedToId: String,
  // comments: [Comment]
}, {
  timestamps: true
});

// TaskSchema.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('Task', TaskSchema);