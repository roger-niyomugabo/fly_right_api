import { Router } from 'express';
import * as Validation from '../middlewares/validation/flightComplaint';
import FlightComplaintController from '../controllers/flightComplaintController';
import { ticketNumberValidation } from '../middlewares/validation/ticketNumber';
import { isPassenger } from '../middlewares/authorization';

const router = Router();

router.post('/', ticketNumberValidation, FlightComplaintController.enter);
router.post('/create', isPassenger, Validation.flightComplaintValidation, FlightComplaintController.create);

export default router;
