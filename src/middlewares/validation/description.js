/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import createDescriptionSchema from './schemas/complaintDescritpion/description';

export const DescriptionValidation = (req, res, next) => (
  validator(createDescriptionSchema, req.body, res, next)
);
