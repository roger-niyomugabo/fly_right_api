import PreferredSolutionServices from '../database/services/preferredSolutionServices';
import output from '../helpers/response';

class PreferredSolutionController {
  static async create(req, res) {
    try {
      const { preferredSolution } = req.body;
      const solutionExists = await PreferredSolutionServices.findSolution({ preferredSolution });
      if (solutionExists) return output(res, 409, 'Solution already exists', null, 'CONFLICT_ERROR');
      const preferSolution = await PreferredSolutionServices.createSolution({ ...req.body });
      return output(res, 201, 'Solution created successfully', preferSolution);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default PreferredSolutionController;
