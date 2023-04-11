import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  profilePicture: {
    type: String,
    default: 'avatar',
  },
  phoneNumber: {
    type: String,
    unique: true
  },
  jobTitle: {
    type: String,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: 'employee'
  }
}, { timestamps: true });

export default mongoose.model('Employee', employeeSchema);
