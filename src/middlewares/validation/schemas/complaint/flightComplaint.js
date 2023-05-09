import Joi from 'joi';

export default Joi.object().keys({
  category: Joi.string().required()
    .error(new Error('Please select a category')),
  description: Joi.string().required()
    .error(new Error('Please select description')),
  preferredSolution: Joi.string().required()
    .error(new Error('Please select preferred solution')),
  comment: Joi.string().min(2).required()
    .error(new Error('Please provide any additional comment'))
}).options({ allowUnknown: true });
