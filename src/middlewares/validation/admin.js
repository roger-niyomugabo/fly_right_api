/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import adminSignupSchema from './schemas/admin/signup';

export const adminSignupValidation = (req, res, next) => (
  validator(adminSignupSchema, req.body, res, next)
);

export const adminSigninValidation = (req, res, next) => (
  validator(adminSigninSchema, req.body, res, next)
);
