import Joi from 'joi';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export default Joi.object().keys({
  firstName: Joi.string().min(2).required()
    .error(new Error('Please provide your first name')),
  lastName: Joi.string().min(2).required()
    .error(new Error('Please provide your first name')),
  email: Joi.string().lowercase().email().required()
    .error(new Error('Please provide a your email')),
  password: Joi.string().regex(passwordRegex).required()
    .error(new Error('Provide uppercase, lowercase, digits 8 long password')),
  securityQuestion: Joi.string().min(5).required().error(new Error('Please provide a security question')),
  securityAnswer: Joi.string().required().error(new Error('Please provide a security answer'))
}).options({ allowUnknown: false });
