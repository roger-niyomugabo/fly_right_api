import { Router } from 'express';
import ComplaintCategoryController from '../controllers/complaintCategoryController';
import * as Validation from '../middlewares/validation/complaintCategory';
import { isAdmin } from '../middlewares/authorization';
import ComplaintDescriptionController from '../controllers/complaintDescriptionController';

const router = Router();

router.post('/create', isAdmin, Validation.complaintCategoryValidation, ComplaintCategoryController.create);
router.get('/all', ComplaintCategoryController.allCategories);
router.get('/:_id/descriptions', ComplaintDescriptionController.allDescriptions);

export default router;
