/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import preferredSolutionSchema from './schemas/preferredSolution/solution';

export const preferredSolutionValidation = (req, res, next) => (
  validator(preferredSolutionSchema, req.body, res, next)
);
