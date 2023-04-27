"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _bcrypt = require("../helpers/bcrypt");
var _response = _interopRequireDefault(require("../helpers/response"));
var _adminServices = _interopRequireDefault(require("../database/services/adminServices"));
var _jwt = require("../helpers/jwt");
var AdminController = /*#__PURE__*/function () {
  function AdminController() {
    (0, _classCallCheck2["default"])(this, AdminController);
  }
  (0, _createClass2["default"])(AdminController, null, [{
    key: "adminSignup",
    value: function () {
      var _adminSignup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, firstName, lastName, email, password, securityQuestion, securityAnswer, role, adminExist, hashedPassword, admin, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password, securityQuestion = _req$body.securityQuestion, securityAnswer = _req$body.securityAnswer;
              role = 'admin';
              _context.next = 5;
              return _adminServices["default"].findAdmin({
                email: email
              });
            case 5:
              adminExist = _context.sent;
              if (!adminExist) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", (0, _response["default"])(res, 409, 'Admin already exists', null, 'ADMIN_EXISTS'));
            case 8:
              _context.next = 10;
              return (0, _bcrypt.generate)(password);
            case 10:
              hashedPassword = _context.sent;
              _context.next = 13;
              return _adminServices["default"].createAdmin({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
                securityQuestion: securityQuestion,
                securityAnswer: securityAnswer,
                role: role
              });
            case 13:
              admin = _context.sent;
              admin.password = undefined;
              _context.next = 17;
              return (0, _jwt.sign)({
                _id: admin._id,
                role: 'admin'
              }, {
                expiresIn: '72h'
              });
            case 17:
              token = _context.sent;
              return _context.abrupt("return", (0, _response["default"])(res, 201, 'Signed up successfully', {
                admin: admin,
                token: token
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
      function adminSignup(_x, _x2) {
        return _adminSignup.apply(this, arguments);
      }
      return adminSignup;
    }()
  }, {
    key: "adminLogin",
    value: function () {
      var _adminLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, email, password, admin, isMatch, token;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
              _context2.next = 4;
              return _adminServices["default"].findAdmin({
                email: email
              });
            case 4:
              admin = _context2.sent;
              if (admin) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", (0, _response["default"])(res, 404, 'Email not registered', null, 'NOT_FOUND'));
            case 7:
              _context2.next = 9;
              return (0, _bcrypt.check)(admin.password, password);
            case 9:
              isMatch = _context2.sent;
              if (isMatch) {
                _context2.next = 12;
                break;
              }
              return _context2.abrupt("return", (0, _response["default"])(res, 400, 'Email or password incorrect', null, 'BAD_REQUEST'));
            case 12:
              admin.password = undefined;
              admin.securityQuestion = undefined;
              admin.securityAnswer = undefined;
              _context2.next = 17;
              return (0, _jwt.sign)({
                _id: admin._id,
                role: 'admin'
              }, {
                expiresIn: '72h'
              });
            case 17:
              token = _context2.sent;
              return _context2.abrupt("return", (0, _response["default"])(res, 200, 'Logged in successfully', {
                admin: admin,
                token: token
              }));
            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", (0, _response["default"])(res, 500, _context2.t0.message || _context2.t0, null, 'SERVER_ERROR'));
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 21]]);
      }));
      function adminLogin(_x3, _x4) {
        return _adminLogin.apply(this, arguments);
      }
      return adminLogin;
    }()
  }]);
  return AdminController;
}();
var _default = AdminController;
exports["default"] = _default;