// eslint-disable-next-line no-unused-vars
import InflightComplaint from '../models/inflightComplaint';

class InflightComplaintServices {
  static async findComplaint(complaint) {
    try {
      return await InflightComplaint.findOne(complaint);
    } catch (error) {
      throw error;
    }
  }

  static async createComplaint(complaint) {
    try {
      return await InflightComplaint.create(complaint);
    } catch (error) {
      throw error;
    }
  }
}

export default InflightComplaintServices;
