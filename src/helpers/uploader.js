/* eslint-disable import/no-extraneous-dependencies */
import { v2 as cloudinary } from 'cloudinary';
import config from './config';

cloudinary.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET
});
export default async (file) => {
  const anyfile = await cloudinary.uploader.upload(file, { resource_type: 'auto' }, (result) => result);
  return anyfile;
};
