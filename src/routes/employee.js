import { Router } from 'express';
import EmployeeController from '../controllers/employeeController';
import { isAdmin } from '../middlewares/authorization';
import * as Validation from '../middlewares/validation/employee';

const router = Router();

router.post('/signup', isAdmin, Validation.employeeSignupValidation, EmployeeController.employeeSignup);

export default router;
