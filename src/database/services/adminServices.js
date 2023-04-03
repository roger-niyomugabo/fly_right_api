import Admin from '../models/admin';

class AdminServices {
  static async findAdmin(admin) {
    try {
      return await Admin.findOne(admin);
    } catch (error) {
      throw error;
    }
  }

  static async createAdmin(admin) {
    try {
      return await Admin.create(admin);
    } catch (error) {
      throw error;
    }
  }
}

export default AdminServices;
