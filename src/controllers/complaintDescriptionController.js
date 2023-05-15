import ComplaintDescriptionServices from '../database/services/complaintDescriptionServices';
import output from '../helpers/response';
import ComplaintCategoryServices from '../database/services/complaintCategoryServices';

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

  static async allDescriptions(req, res) {
    try {
      const { _id } = req.params;
      const category = await ComplaintCategoryServices.findCategory({ _id });
      const descriptions = await ComplaintDescriptionServices.findAllDescriptions({ category: category._id });
      return output(res, 200, 'Complaint descriptions retrieved successfully', descriptions);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default ComplaintDescriptionController;
