import ComplaintDescriptionServices from '../database/services/complaintDescriptionServices';
import output from '../helpers/response';

class ComplaintDescriptionController {
  static async create(req, res) {
    try {
      const { description } = req.body;
      const complaintDescriptionExists = await ComplaintDescriptionServices.findDescription({ description });
      if (complaintDescriptionExists) return output(res, 409, 'Complaint description already exists', null, 'CONFLICT_ERROR');
      const complaintDescription = await ComplaintDescriptionServices.createDescription({ ...req.body });
      return output(res, 201, 'Complaint description added successfully', complaintDescription);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default ComplaintDescriptionController;
