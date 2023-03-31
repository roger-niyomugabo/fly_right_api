import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  organization: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    minlength: [6, 'password must have 6 character']
  },
});
const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
