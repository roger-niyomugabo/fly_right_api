import Joi from 'joi';

export default Joi.object().keys({
  preferredSolution: Joi.string().required()
    .error(new Error('Please provide solution')),
  description: Joi.string().required()
    .error(new Error('Please provide complaint description')),
}).options({ allowUnknown: false });
