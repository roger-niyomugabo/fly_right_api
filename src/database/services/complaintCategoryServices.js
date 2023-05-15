import ComplaintCategory from '../models/complaintCategory';

class ComplaintCategoryServices {
  static async findCategory(category) {
    try {
      return await ComplaintCategory.findOne(category);
    } catch (error) {
      throw error;
    }
  }

  static async createCategory(category) {
    try {
      return await ComplaintCategory.create(category);
    } catch (error) {
      throw error;
    }
  }

  static async findCategories() {
    try {
      return await ComplaintCategory.find();
    } catch (error) {
      throw error;
    }
  }
}

export default ComplaintCategoryServices;
