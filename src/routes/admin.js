import { Router } from 'express';
import AdminController from '../controllers/adminController';
import * as Validation from '../middlewares/validation/admin';

const router = Router();

router.post('/signup', Validation.adminSignupValidation, AdminController.createAdmin);
router.post('/signin', Validation.adminSigninValidation, AdminController.signinAdmin);

export default router;
