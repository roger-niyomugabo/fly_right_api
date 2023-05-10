import mongoose from 'mongoose';

const complaintCategory = new mongoose.Schema({
  category: {
    type: String,
    unique: true
  },
  parent_category: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Category'
  }
});

export default mongoose.model('ComplaintCategory', complaintCategory);
