/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import TicketNumberSchema from './schemas/ticket/ticketNumber';

export const ticketNumberValidation = (req, res, next) => (
  validator(TicketNumberSchema, req.body, res, next)
);
