/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import adminSignupSchema from './schemas/admin/signup';
import loginSchema from './schemas/admin/login';

export const adminSignupValidation = (req, res, next) => (
  validator(adminSignupSchema, req.body, res, next)
);

export const loginValidation = (req, res, next) => (
  validator(loginSchema, req.body, res, next)
);
