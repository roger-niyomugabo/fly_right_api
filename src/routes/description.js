import { Router } from 'express';
import * as Validation from '../middlewares/validation/description';
import { isAdmin } from '../middlewares/authorization';
import ComplaintDescriptionController from '../controllers/complaintDescriptionController';

const router = Router();

router.post('/create', isAdmin, Validation.DescriptionValidation, ComplaintDescriptionController.create);
router.get('/:_id/preferredsolutions', ComplaintDescriptionController.allPreferredSolutions);

export default router;
