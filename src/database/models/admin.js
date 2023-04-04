import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  securityQuestion: {
    type: String,
  },
  securityAnswer: {
    type: String,
  },
  role: {
    type: String,
    default: 'admin',
  },
});
const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
