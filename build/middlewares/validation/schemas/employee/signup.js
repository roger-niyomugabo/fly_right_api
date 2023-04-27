"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _default = _joi["default"].object().keys({
  fullName: _joi["default"].string().min(4).required().error(new Error('Please provide full name')),
  email: _joi["default"].string().lowercase().email().required().error(new Error('Please provide a valid email address')),
  phoneNumber: _joi["default"].string().regex(/^[0-9]+$/).length(12).required().error(new Error('Please provide phone number starting with country code ')),
  jobTitle: _joi["default"].string().required().error(new Error('Please provide a job title')),
  address: _joi["default"].string().required().error(new Error('Please provide address'))
}).options({
  allowUnknown: true
});
exports["default"] = _default;