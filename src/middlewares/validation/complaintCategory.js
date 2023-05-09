/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import createComplaintCategorySchema from './schemas/complaintCategory/createCategory';

export const complaintCategoryValidation = (req, res, next) => (
  validator(createComplaintCategorySchema, req.body, res, next)
);
