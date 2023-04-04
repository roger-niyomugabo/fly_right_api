import Joi from 'joi';

export default Joi.object().keys({
  email: Joi.string().email().lowercase().required()
    .error(new Error('Please provide your email')),
  password: Joi.string().required().error(new Error('Please provide your password'))
}).options({ allowUnknown: false });
