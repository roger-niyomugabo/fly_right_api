import Category from '../models/category';

class CategoryServices {
  static async findCategory(category) {
    try {
      return await Category.findOne(category);
    } catch (error) {
      throw error;
    }
  }

  static async createCategory(category) {
    try {
      return await Category.create(category);
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryServices;
