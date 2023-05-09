import { Router } from 'express';
import adminRouter from './admin';
import employeeRouter from './employee';
import complaintCategoryRouter from './complaintCategory';

const router = Router();

router.use('/admin', adminRouter);
router.use('/employee', employeeRouter);
router.use('/category', complaintCategoryRouter);

export default router;
