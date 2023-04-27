"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _bcrypt = require("../helpers/bcrypt");
var _response = _interopRequireDefault(require("../helpers/response"));
var _employeeServices = _interopRequireDefault(require("../database/services/employeeServices"));
var _generatePassword = _interopRequireDefault(require("../helpers/generatePassword"));
var _mailer = _interopRequireDefault(require("../helpers/mailer"));
var _jwt = require("../helpers/jwt");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EmployeeController = /*#__PURE__*/function () {
  function EmployeeController() {
    (0, _classCallCheck2["default"])(this, EmployeeController);
  }
  (0, _createClass2["default"])(EmployeeController, null, [{
    key: "employeeSignup",
    value: function () {
      var _employeeSignup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var email, employeeExist, password, hashedPassword, employee;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              email = req.body.email;
              _context.next = 4;
              return _employeeServices["default"].findEmployee({
                email: email
              });
            case 4:
              employeeExist = _context.sent;
              if (!employeeExist) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", (0, _response["default"])(res, 409, 'User already exists', null, 'USER_EXISTS'));
            case 7:
              password = (0, _generatePassword["default"])();
              _context.next = 10;
              return (0, _bcrypt.generate)(password);
            case 10:
              hashedPassword = _context.sent;
              _context.next = 13;
              return _employeeServices["default"].createEmployee(_objectSpread(_objectSpread({}, req.body), {}, {
                password: hashedPassword
              }));
            case 13:
              employee = _context.sent;
              employee.password = undefined;
              employee.updatedAt = undefined;
              _context.next = 18;
              return (0, _mailer["default"])({
                email: employee.email,
                password: password,
                fullName: employee.fullName,
                jobTitle: employee.jobTitle
              }, 'createEmployee');
            case 18:
              return _context.abrupt("return", (0, _response["default"])(res, 201, 'Signed up successfully', {
                employee: employee
              }));
            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", (0, _response["default"])(res, 500, _context.t0.message || _context.t0, null, 'SERVER_ERROR'));
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 21]]);
      }));
      function employeeSignup(_x, _x2) {
        return _employeeSignup.apply(this, arguments);
      }
      return employeeSignup;
    }()
  }, {
    key: "employeeLogin",
    value: function () {
      var _employeeLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, email, password, employee, isMatch, token;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context2.next = 4;
              return _employeeServices["default"].findEmployee({
                email: email
              });
            case 4:
              employee = _context2.sent;
              if (employee) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", (0, _response["default"])(res, 404, 'Email not registered', null, 'NOT_FOUND'));
            case 7:
              isMatch = (0, _bcrypt.check)(employee.password, password);
              if (isMatch) {
                _context2.next = 10;
                break;
              }
              return _context2.abrupt("return", (0, _response["default"])(res, 400, 'Email or password incorrect', null, 'BAD_REQUEST'));
            case 10:
              token = (0, _jwt.sign)({
                _id: employee._id,
                role: employee.role
              }, {
                expiresIn: '72h'
              });
              return _context2.abrupt("return", (0, _response["default"])(res, 200, 'Logged in successfully', {
                token: token
              }));
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", (0, _response["default"])(res, 500, _context2.t0.message || _context2.t0, null, 'SERVER_ERROR'));
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 14]]);
      }));
      function employeeLogin(_x3, _x4) {
        return _employeeLogin.apply(this, arguments);
      }
      return employeeLogin;
    }()
  }, {
    key: "getAllEmployees",
    value: function () {
      var _getAllEmployees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var employees;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _employeeServices["default"].getEmployees();
            case 3:
              employees = _context3.sent;
              return _context3.abrupt("return", (0, _response["default"])(res, 200, 'All employees retrieved!', employees));
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", (0, _response["default"])(res, 500, _context3.t0.message || _context3.t0, null, 'SERVER_ERROR'));
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function getAllEmployees(_x5, _x6) {
        return _getAllEmployees.apply(this, arguments);
      }
      return getAllEmployees;
    }()
  }, {
    key: "getSingleEmployee",
    value: function () {
      var _getSingleEmployee = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, employee;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params._id;
              _context4.next = 4;
              return _employeeServices["default"].getEmployee(id);
            case 4:
              employee = _context4.sent;
              if (employee) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", (0, _response["default"])(res, 404, 'employee not found'));
            case 7:
              employee.password = undefined;
              return _context4.abrupt("return", (0, _response["default"])(res, 200, ' Employee retrieved!', employee, null, 'SERVER_ERROR'));
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", (0, _response["default"])(res, 500, _context4.t0.message || _context4.t0, null, 'SERVER_ERROR'));
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 11]]);
      }));
      function getSingleEmployee(_x7, _x8) {
        return _getSingleEmployee.apply(this, arguments);
      }
      return getSingleEmployee;
    }()
  }]);
  return EmployeeController;
}();
var _default = EmployeeController;
exports["default"] = _default;