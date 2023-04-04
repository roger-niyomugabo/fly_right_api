import { generate, check } from '../helpers/bcrypt';
import output from '../helpers/response';
import AdminService from '../database/services/adminServices';
import { sign } from '../helpers/jwt';

class AdminController {
  static async adminSignup(req, res) {
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

  static async adminLogin(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await AdminService.findAdmin({ email });
      if (!admin) return output(res, 404, 'Email not registered', null, 'NOT_FOUND');
      const isMatch = await check(admin.password, password);
      if (!isMatch) return output(res, 400, 'Email or password incorrect', null, 'BAD_REQUEST');
      admin.password = undefined;
      admin.securityQuestion = undefined;
      admin.securityAnswer = undefined;
      const token = await sign({ _id: admin._id, role: 'admin' }, { expiresIn: '72h' });
      return output(res, 200, 'Logged in successfully', { admin, token });
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default AdminController;
