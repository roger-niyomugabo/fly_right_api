import { generate } from '../helpers/bcrypt';
import output from '../helpers/response';
import AdminService from '../database/services/adminServices';
import { sign } from '../helpers/jwt';

class AdminController {
  static async createAdmin(req, res) {
    try {
      const {
        firstName,
        lastName, email, password, securityQuestion,
        securityAnswer
      } = req.body;
      const adminExist = await AdminService.findAdmin({ email });
      if (adminExist) return output(res, 409, 'Admin already exists', null, 'ADMIN_EXISTS');
      const hashedPassword = await generate(password);
      const admin = await AdminService.createAdmin({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        securityQuestion,
        securityAnswer
      });
      admin.password = undefined;
      const token = await sign({ _id: admin._id, role: 'admin' }, { expiresIn: '72h' });
      return output(res, 201, 'Signed up successfully', { admin, token });
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default AdminController;