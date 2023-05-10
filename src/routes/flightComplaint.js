import { Router } from 'express';
import * as Validation from '../middlewares/validation/flightComplaint';
import FlightComplaintController from '../controllers/flightComplaintController';

const router = Router();

router.post('/create', Validation.flightComplaintValidation, FlightComplaintController.create);

export default router;
