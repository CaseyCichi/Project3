import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const CommentSchema = new mongoose.Schema({
  title: String,
  text: String,
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  poster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

CommentSchema.plugin(mongooseDelete, {
  deletedAt: true
});

export default mongoose.model('Comment', CommentSchema);