import { Router } from 'express';
import CategoryController from '../controllers/categoryController';
import * as Validation from '../middlewares/validation/category';
import { isAdmin } from '../middlewares/authorization';

const router = Router();

router.post('/create', isAdmin, Validation.CategoryValidation, CategoryController.create);

export default router;
