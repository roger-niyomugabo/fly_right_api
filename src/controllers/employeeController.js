import { generate } from '../helpers/bcrypt';
import output from '../helpers/response';
import EmployeeService from '../database/services/employeeServices';
import generatePassword from '../helpers/generatePassword';
import mailer from '../helpers/mailer';

class EmployeeController {
  static async employeeSignup(req, res) {
    try {
      const {
        email
      } = req.body;
      const employeeExist = await EmployeeService.findEmployee({ email });
      if (employeeExist) return output(res, 409, 'User already exists', null, 'USER_EXISTS');
      const password = generatePassword();
      const hashedPassword = await generate(password);
      const employee = await EmployeeService.createEmployee({
        ...req.body,
        password: hashedPassword
      });
      employee.password = undefined;
      employee.updatedAt = undefined;
      await mailer({
        email: employee.email, password, fullName: employee.fullName, jobTitle: employee.jobTitle
      }, 'createEmployee');
      return output(res, 201, 'Signed up successfully', { employee });
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default EmployeeController;
