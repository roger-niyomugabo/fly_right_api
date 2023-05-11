import Joi from 'joi';

const ticketNumberRegex = /^[A-Z]{3}\d{9}-[A-Z]$/;

export default Joi.object().keys({
  ticketNumber: Joi.string().regex(ticketNumberRegex).required()
    .error(new Error('Please provide a valid ticket number')),
}).options({ allowUnknown: false });
