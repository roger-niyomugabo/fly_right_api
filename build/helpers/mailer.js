"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _config = _interopRequireDefault(require("./config"));
var _emailTemplates = require("./emailTemplates");
var mailer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(info, action) {
    var transporter, subject, emailto, data, mailOptions, sendMail;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            service: 'gmail',
            auth: {
              user: _config["default"].API_SENDER_EMAIL,
              pass: _config["default"].EMAIL_PASSWORD
            }
          });
          _context.t0 = action;
          _context.next = _context.t0 === 'createEmployee' ? 4 : 8;
          break;
        case 4:
          subject = 'Sign up successful';
          data = (0, _emailTemplates.employeeSignupTemplate)(info);
          emailto = info.email;
          return _context.abrupt("break", 10);
        case 8:
          subject = '';
          return _context.abrupt("break", 10);
        case 10:
          mailOptions = {
            from: "\"FLY RIGHT\"<".concat(_config["default"].API_SENDER_EMAIL, ">"),
            to: emailto,
            subject: subject,
            html: data
          };
          _context.prev = 11;
          sendMail = transporter.sendMail(mailOptions);
          return _context.abrupt("return", sendMail);
        case 16:
          _context.prev = 16;
          _context.t1 = _context["catch"](11);
          return _context.abrupt("return", _context.t1);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[11, 16]]);
  }));
  return function mailer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = mailer;
exports["default"] = _default;