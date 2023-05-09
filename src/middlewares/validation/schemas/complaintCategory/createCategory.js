import Joi from 'joi';

export default Joi.object().keys({
  category: Joi.string().required()
    .error(new Error('Please provide category name')),
  description: Joi.string().required()
    .error(new Error('Please provide category description')),
}).options({ allowUnknown: false });
