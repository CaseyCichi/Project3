import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const EventSchema = new mongoose.Schema({
  title: String,
  text: String,
}, {
  timestamps: true
});

EventSchema.plugin(mongooseDelete, {
  deletedAt: true
});

export default mongoose.model('Event', EventSchema);