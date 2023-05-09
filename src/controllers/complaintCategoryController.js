import ComplaintCategoryServices from '../database/services/complaintCategoryServices';
import output from '../helpers/response';

class ComplaintCategoryController {
  static async create(req, res) {
    try {
      const { category } = req.body;
      const complaintCategoryExists = await ComplaintCategoryServices.findCategory({ category });
      if (complaintCategoryExists) return output(res, 409, 'Complaint category already exists', null, 'CONFLICT_ERROR');
      const complaintCategory = await ComplaintCategoryServices.createCategory({ ...req.body });
      return output(res, 201, 'Category created successfully', complaintCategory);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default ComplaintCategoryController;
