import Employee from '../models/employee';

class EmployeeServices {
  static async findEmployee(employee) {
    try {
      return await Employee.findOne(employee);
    } catch (error) {
      throw error;
    }
  }

  static async createEmployee(employee) {
    try {
      return await Employee.create(employee);
    } catch (error) {
      throw error;
    }
  }

  static async deleteEmployee(employee) {
    try {
      return await Employee.findOneAndDelete(employee);
    } catch (error) {
      throw error;
    }
  }

  static async getEmployee(id) {
    try {
      return await Employee.findById(id).select('-role');
    } catch (error) {
      throw error;
    }
  }
}

export default EmployeeServices;
