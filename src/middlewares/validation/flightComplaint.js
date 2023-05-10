/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import flightComplaintSchema from './schemas/complaint/flightComplaint';

export const flightComplaintValidation = (req, res, next) => (
  validator(flightComplaintSchema, req.body, res, next)
);
