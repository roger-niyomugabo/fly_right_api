import { generate, check } from '../helpers/bcrypt';
import output from '../helpers/response';
import EmployeeService from '../database/services/employeeServices';
import generatePassword from '../helpers/generatePassword';
import mailer from '../helpers/mailer';
import { sign } from '../helpers/jwt';

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

  static async employeeLogin(req, res) {
    try {
      const { email, password } = req.body;
      const employee = await EmployeeService.findEmployee({ email });
      if (!employee) return output(res, 404, 'Email not registered', null, 'NOT_FOUND');
      const isMatch = check(employee.password, password);
      if (!isMatch) return output(res, 400, 'Email or password incorrect', null, 'BAD_REQUEST');
      const token = sign({ _id: employee._id, role: employee.role }, { expiresIn: '72h' });
      return output(res, 200, 'Logged in successfully', { token });
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllEmployees(req, res) {
    try {
      const employees = await EmployeeService.getEmployees();
      return output(res, 200, 'All employees retrieved!', employees);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getSingleEmployee(req, res) {
    try {
      const { _id: id } = req.params;
      const employee = await EmployeeService.getEmployee(id);
      if (!employee) return output(res, 404, 'employee not found');
      employee.password = undefined;
      return output(res, 200, ' Employee retrieved!', employee, null, 'SERVER_ERROR');
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default EmployeeController;
