import Joi from 'joi';

export default Joi.object().keys({
  description: Joi.string().required()
    .error(new Error('Please provide category description')),
  category: Joi.string().required()
    .error(new Error('Please provide complaint category')),
}).options({ allowUnknown: false });
