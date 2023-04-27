"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _default = _joi["default"].object().keys({
  email: _joi["default"].string().email().lowercase().required().error(new Error('Please provide your email')),
  password: _joi["default"].string().required().error(new Error('Please provide your password'))
}).options({
  allowUnknown: false
});
exports["default"] = _default;