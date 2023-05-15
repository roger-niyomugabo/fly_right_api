import ComplaintDescription from '../models/complaintDescription';

class ComplaintDescriptionServices {
  static async findDescription(description) {
    try {
      return await ComplaintDescription.findOne(description);
    } catch (error) {
      throw error;
    }
  }

  static async createDescription(description) {
    try {
      return await ComplaintDescription.create(description);
    } catch (error) {
      throw error;
    }
  }

  static async findAllDescriptions(descriptions) {
    try {
      return await ComplaintDescription.find(descriptions);
    } catch (error) {
      throw error;
    }
  }
}

export default ComplaintDescriptionServices;
