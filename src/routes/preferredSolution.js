import { Router } from 'express';
import * as Validation from '../middlewares/validation/preferredSolution';
import { isAdmin } from '../middlewares/authorization';
import PreferredSolutionController from '../controllers/preferredSolutionController';

const router = Router();

router.post('/create', isAdmin, Validation.preferredSolutionValidation, PreferredSolutionController.create);

export default router;
