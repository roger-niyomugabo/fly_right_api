"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var employeeSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  profilePicture: {
    type: String,
    "default": 'avatar'
  },
  phoneNumber: {
    type: String,
    unique: true
  },
  jobTitle: {
    type: String
  },
  address: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
    "default": 'employee'
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('Employee', employeeSchema);
exports["default"] = _default;