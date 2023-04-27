"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jwt = require("../helpers/jwt");
var _response = _interopRequireDefault(require("../helpers/response"));
/* eslint-disable import/prefer-default-export */

var isAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, admin;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (req.header('Authorization')) {
            _context.next = 3;
            break;
          }
          throw new Error('Invalid access token');
        case 3:
          token = req.header('Authorization').replace('Bearer ', '');
          admin = (0, _jwt.verify)(token);
          if (!(admin.role !== 'admin')) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", (0, _response["default"])(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN'));
        case 7:
          req.admin = admin;
          req.token = token;
          return _context.abrupt("return", next());
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", (0, _response["default"])(res, 401, _context.t0.message || _context.t0, null, 'AUTHENTICATION_ERROR'));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function isAdmin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.isAdmin = isAdmin;