import { Router } from 'express';
import AdminController from '../controllers/adminController';
import adminSignupValidation from '../middlewares/validation/admin';

const router = Router();

router.post('/signup', adminSignupValidation, AdminController.createAdmin);

export default router;
