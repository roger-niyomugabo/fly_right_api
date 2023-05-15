import ComplaintPreferredSolution from '../models/preferredSolution';

class PreferredSolutionServices {
  static async findSolution(solution) {
    try {
      return await ComplaintPreferredSolution.findOne(solution);
    } catch (error) {
      throw error;
    }
  }

  static async createSolution(solution) {
    try {
      return await ComplaintPreferredSolution.create(solution);
    } catch (error) {
      throw error;
    }
  }

  static async findSolutions(solution) {
    try {
      return await ComplaintPreferredSolution.find(solution);
    } catch (error) {
      throw error;
    }
  }
}

export default PreferredSolutionServices;
