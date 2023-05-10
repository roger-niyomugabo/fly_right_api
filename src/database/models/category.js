import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  category_name: { type: String, unique: true, enum: ['Inflight', 'Outflight'] },
  description: { type: String }
});

export default mongoose.model('Category', categorySchema);
