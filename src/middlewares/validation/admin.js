/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import adminSignupSchema from './schemas/admin/signup';
import adminLoginSchema from './schemas/admin/login';

export const adminSignupValidation = (req, res, next) => (
  validator(adminSignupSchema, req.body, res, next)
);

export const adminLoginValidation = (req, res, next) => (
  validator(adminLoginSchema, req.body, res, next)
);
