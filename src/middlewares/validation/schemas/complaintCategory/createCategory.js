import Joi from 'joi';

export default Joi.object().keys({
  category: Joi.string().required()
    .error(new Error('Please provide category name')),
  parent_category: Joi.string().required()
    .error(new Error('Please provide parent category')),
}).options({ allowUnknown: false });
