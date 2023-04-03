import { Router } from 'express';
import AdminController from '../controllers/adminController';
import * as Validation from '../middlewares/validation/admin';

const router = Router();

router.post('/signup', Validation.adminSignupValidation, AdminController.createAdmin);

export default router;
