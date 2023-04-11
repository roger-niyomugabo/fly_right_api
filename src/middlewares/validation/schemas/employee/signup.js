import Joi from 'joi';

export default Joi.object().keys({
  fullName: Joi.string().min(4).required()
    .error(new Error('Please provide full name')),
  email: Joi.string().lowercase().email().required()
    .error(new Error('Please provide a valid email address')),
  phoneNumber: Joi.string().regex(/^[0-9]+$/).length(12).required()
    .error(new Error('Please provide phone number starting with country code ')),
  jobTitle: Joi.string().required().error(new Error('Please provide a job title')),
  address: Joi.string().required().error(new Error('Please provide address')),
}).options({ allowUnknown: true });
