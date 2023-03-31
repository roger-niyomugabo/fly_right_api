import Joi from 'joi';

const adminSignupSchema = Joi.object().keys({
  organization: Joi.string().max(20).required(),
  fullName: Joi.string().min(4).max(20).required(),
  email: Joi.string().lowercase().email().required(),

});
export default adminSignupSchema;
