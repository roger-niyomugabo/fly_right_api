import { Router } from 'express';
import adminRouter from './admin';
import employeeRouter from './employee';

const router = Router();

router.use('/admin', adminRouter);
router.use('/employee', employeeRouter);
export default router;
