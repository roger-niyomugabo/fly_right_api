import Joi from 'joi';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export default Joi.object().keys({
  email: Joi.string().lowercase().email().required()
    .error(new Error('Please provide a your email')),
  password: Joi.string().regex(passwordRegex).required()
    .error(new Error('your password contain uppercase, lowercase, digits 8 long password')),
});
