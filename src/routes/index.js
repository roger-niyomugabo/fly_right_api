import { Router } from 'express';
import adminRouter from './admin';
import employeeRouter from './employee';
import complaintCategoryRouter from './complaintCategory';
import complaintDescriptionRouter from './description';
import preferredSolutionRouter from './preferredSolution';

const router = Router();

router.use('/admin', adminRouter);
router.use('/employee', employeeRouter);
router.use('/category', complaintCategoryRouter);
router.use('/description', complaintDescriptionRouter);
router.use('/solution', preferredSolutionRouter);

export default router;
