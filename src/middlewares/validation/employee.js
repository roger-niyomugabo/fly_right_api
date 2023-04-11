/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import employeeSignupSchema from './schemas/employee/signup';

export const employeeSignupValidation = (req, res, next) => (
  validator(employeeSignupSchema, req.body, res, next)
);
