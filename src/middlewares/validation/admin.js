/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import adminSignupSchema from './schemas/admin/signup';
import adminSigninSchema from './schemas/admin/signin';

export const adminSignupValidation = (req, res, next) => (
  validator(adminSignupSchema, req.body, res, next)
);
