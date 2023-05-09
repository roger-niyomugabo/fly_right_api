import { Router } from 'express';
import ComplaintCategoryController from '../controllers/complaintCategoryController';
import * as Validation from '../middlewares/validation/complaintCategory';
import { isAdmin } from '../middlewares/authorization';

const router = Router();

router.post('/create', isAdmin, Validation.complaintCategoryValidation, ComplaintCategoryController.createComplaintCategory);

export default router;
