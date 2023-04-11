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

  static async getEmployees() {
    try {
      return await Employee.find().select('_id fullName email phoneNumber jobTitle').sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  }
}

export default EmployeeServices;
