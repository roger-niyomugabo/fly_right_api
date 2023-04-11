/* eslint-disable import/prefer-default-export */
import { verify } from '../helpers/jwt';
import output from '../helpers/response';

export const isAdmin = async (req, res, next) => {
  try {
    if (!req.header('Authorization')) throw new Error('Invalid access token');
    const token = req.header('Authorization').replace('Bearer ', '');
    const admin = verify(token);
    if (admin.role !== 'admin') return output(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    req.admin = admin;
    req.token = token;
    return next();
  } catch (error) {
    return output(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};
