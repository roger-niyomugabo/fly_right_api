import InflightComplaintServices from '../database/services/inflightComplaintServices';
import OutflightComplaintServices from '../database/services/outflightComplaintServices';
import ComplaintCategoryServices from '../database/services/complaintCategoryServices';
import CategoryServices from '../database/services/categoryServices';
import output from '../helpers/response';
import upload from '../helpers/uploader';

class FlightComplaintController {
  static async create(req, res) {
    try {
      const {
        category, comment
      } = req.body;
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
          const inflightComplaint = await InflightComplaintServices.createComplaint(req.body);
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
          const outflightComplaint = await OutflightComplaintServices.createComplaint(req.body);
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
