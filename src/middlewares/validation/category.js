/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import createCategorySchema from './schemas/category/category';

export const CategoryValidation = (req, res, next) => (
  validator(createCategorySchema, req.body, res, next)
);
