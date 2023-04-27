"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
var _default = _joi["default"].object().keys({
  firstName: _joi["default"].string().min(2).required().error(new Error('Please provide your first name')),
  lastName: _joi["default"].string().min(2).required().error(new Error('Please provide your first name')),
  email: _joi["default"].string().lowercase().email().required().error(new Error('Please provide a your email')),
  password: _joi["default"].string().regex(passwordRegex).required().error(new Error('Provide uppercase, lowercase, digits 8 long password')),
  securityQuestion: _joi["default"].string().min(5).required().error(new Error('Please provide a security question')),
  securityAnswer: _joi["default"].string().required().error(new Error('Please provide a security answer'))
}).options({
  allowUnknown: false
});
exports["default"] = _default;