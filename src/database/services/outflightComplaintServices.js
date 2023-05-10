// eslint-disable-next-line no-unused-vars
import OutflightComplaint from '../models/outflightComplaint';

class OutflightComplaintServices {
  static async findComplaint(complaint) {
    try {
      return await OutflightComplaint.findOne(complaint);
    } catch (error) {
      throw error;
    }
  }

  static async createComplaint(complaint) {
    try {
      return await OutflightComplaint.create(complaint);
    } catch (error) {
      throw error;
    }
  }
}

export default OutflightComplaintServices;
