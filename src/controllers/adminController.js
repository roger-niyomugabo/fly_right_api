import Admin from '../database/models/index';
import { generate } from '../helpers/bcrypt';
import output from '../helpers/response';

class AdminController {
  static async createAdmin(req, res) {
    try {
      const {
        organization, fullName, email, password
      } = req.body;
      const hashedPassword = await generate(password);
      const admin = await Admin.create({
        organization, fullName, email, password: hashedPassword
      });
      admin.password = undefined;
      return output(res, 200, 'Account created', admin);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default AdminController;
