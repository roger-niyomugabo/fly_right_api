import validator from '../../helpers/validator';
import adminSignupSchema from './schemas/admin/signup';

const adminSignupValidation = (req, res, next) => (
  validator(adminSignupSchema, req.body, res, next)
);
export default adminSignupValidation;
