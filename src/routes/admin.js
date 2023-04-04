import { Router } from 'express';
import AdminController from '../controllers/adminController';
import * as Validation from '../middlewares/validation/admin';

const router = Router();

router.post('/signup', Validation.adminSignupValidation, AdminController.adminSignup);
router.post('/login', Validation.adminLoginValidation, AdminController.adminLogin);

export default router;
