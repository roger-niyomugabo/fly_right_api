"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var adminSchema = _mongoose["default"].Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  securityQuestion: {
    type: String
  },
  securityAnswer: {
    type: String
  },
  role: {
    type: String,
    "default": 'admin'
  }
});
var Admin = _mongoose["default"].model('Admin', adminSchema);
var _default = Admin;
exports["default"] = _default;