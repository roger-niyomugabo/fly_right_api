import { Router } from 'express';
import adminRouter from './admin';
import employeeRouter from './employee';
import complaintCategoryRouter from './complaintCategory';
import complaintDescriptionRouter from './description';
import preferredSolutionRouter from './preferredSolution';
import categoryRouter from './category';
import flightComplaint from './flightComplaint';

const router = Router();

router.use('/admin', adminRouter);
router.use('/employee', employeeRouter);
router.use('/complaintcategory', complaintCategoryRouter);
router.use('/description', complaintDescriptionRouter);
router.use('/solution', preferredSolutionRouter);
router.use('/category', categoryRouter);
router.use('/complaint', flightComplaint);

export default router;
