import mongoose from 'mongoose';

const inflightComplaintSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ComplaintCategory'
  },
  description: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ComplaintDescription'
  },
  preferredSolution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ComplaintPreferredSolution'
  },
  additionalEvidence: {
    type: String,
    default: ''
  },
  comment: {
    type: String,
    unique: true
  },
  passenger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket',
  },
  status: {
    type: String,
    default: 'pending'
  }
});

export default mongoose.model('InflightComplaint', inflightComplaintSchema);
