import InflightComplaintServices from '../database/services/inflightComplaintServices';
import OutflightComplaintServices from '../database/services/outflightComplaintServices';
import ComplaintCategoryServices from '../database/services/complaintCategoryServices';
import CategoryServices from '../database/services/categoryServices';
import TicketServices from '../database/services/ticketServices';
import output from '../helpers/response';
import upload from '../helpers/uploader';
import { sign } from '../helpers/jwt';

class FlightComplaintController {
  static async enter(req, res) {
    try {
      const { ticketNumber } = req.body;
      const ticketNumberExists = await TicketServices.findTicket({ ticketNumber });
      if (!ticketNumberExists) return output(res, 404, 'Could not find the provided ticket number, it may be invalid!', null, 'NOT_FOUND');
      const token = sign({ passengerId: ticketNumberExists._id, ticketNumber: ticketNumberExists.ticketIssuer, role: 'passenger' }, { expiresIn: '24h' });
      return output(res, 200, 'Proceed for a complaint!', token);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async create(req, res) {
    try {
      const {
        category, comment
      } = req.body;
      const { passengerId } = req.passenger;
      const complaintCategory = await ComplaintCategoryServices.findCategory({ _id: category });
      if (complaintCategory) {
        const isCategoryInflightOrOutflight = await CategoryServices.findCategory({ _id: complaintCategory.parent_category });
        if (isCategoryInflightOrOutflight.category_name === 'Inflight') {
          const commentExists = await InflightComplaintServices.findComplaint({ comment });
          if (commentExists) return output(res, 409, 'Similar complaint already exists', null, 'CONFLICT_ERROR');
          if (req.files) {
            const { additionalEvidence } = req.files;
            const uploadedContent = await upload(additionalEvidence.tempFilePath);
            req.body.additionalEvidence = uploadedContent.secure_url;
          }
          const inflightComplaint = await InflightComplaintServices.createComplaint({
            ...req.body,
            passenger: passengerId
          });
          return output(res, 201, 'Your complaint has been sent successfully', inflightComplaint);
        }
        if (isCategoryInflightOrOutflight.category_name === 'Outflight') {
          const commentExists = await OutflightComplaintServices.findComplaint({ comment });
          if (commentExists) return output(res, 409, 'Similar complaint already exists', null, 'CONFLICT_ERROR');
          if (req.files) {
            const { additionalEvidence } = req.files;
            const uploadedContent = await upload(additionalEvidence.tempFilePath);
            req.body.additionalEvidence = uploadedContent.secure_url;
          }
          const outflightComplaint = await OutflightComplaintServices.createComplaint({
            ...req.body,
            passenger: passengerId
          });
          return output(res, 201, 'Your complaint has been sent successfully', outflightComplaint);
        }
      }
      return output(res, 400, 'No complaint category matching the provided one', null, 'BAD_REQUEST');
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default FlightComplaintController;
