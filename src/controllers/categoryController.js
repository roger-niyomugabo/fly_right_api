/* eslint-disable camelcase */
import CategoryServices from '../database/services/categoryServices';
import output from '../helpers/response';

class CategoryController {
  static async create(req, res) {
    try {
      const { category_name } = req.body;
      const categoryExists = await CategoryServices.findCategory({ category_name });
      if (categoryExists) return output(res, 409, 'Category already exists', null, 'CONFLICT_ERROR');
      const category = await CategoryServices.createCategory({ ...req.body });
      return output(res, 201, 'Category created successfully', category);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default CategoryController;
