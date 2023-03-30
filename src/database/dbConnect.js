/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from '../helpers/config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('database connected successfully!!');
  } catch (error) {
    console.log('error', error);
  }
};

export default connectDB;
