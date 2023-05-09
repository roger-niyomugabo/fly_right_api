import mongoose from 'mongoose';

const descriptionSchema = new mongoose.Schema({
  description: { type: String, unique: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'ComplaintCategory' }
});

export default mongoose.model('ComplaintDescription', descriptionSchema);
