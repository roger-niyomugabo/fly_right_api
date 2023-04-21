import { Router } from 'express';
import EmployeeController from '../controllers/employeeController';
import { isAdmin } from '../middlewares/authorization';
import * as Validation from '../middlewares/validation/employee';
import { loginValidation } from '../middlewares/validation/admin';

const router = Router();

router.post('/signup', isAdmin, Validation.employeeSignupValidation, EmployeeController.employeeSignup);
router.post('/login', loginValidation, EmployeeController.employeeLogin);
router.get('/getAll', isAdmin, EmployeeController.getAllEmployees);
router.get('/:_id', isAdmin, EmployeeController.getSingleEmployee);
router.delete('/delete/:id', isAdmin, EmployeeController.deleteEmployee);

export default router;
