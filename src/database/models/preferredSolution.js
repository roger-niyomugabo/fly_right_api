import mongoose from 'mongoose';

const preferredSolutionSchema = new mongoose.Schema({
  preferredSolution: { type: String, unique: true },
  description: { type: mongoose.Schema.Types.ObjectId, ref: 'ComplaintDescription' }
});

export default mongoose.model('ComplaintPreferredSolution', preferredSolutionSchema);
