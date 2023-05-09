import mongoose from 'mongoose';

const complaintCategory = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  description: {
    type: String
  }
});

export default mongoose.model('ComplaintCategory', complaintCategory);
