"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeeSignupValidation = void 0;
var _validator = _interopRequireDefault(require("../../helpers/validator"));
var _signup = _interopRequireDefault(require("./schemas/employee/signup"));
/* eslint-disable import/prefer-default-export */

var employeeSignupValidation = function employeeSignupValidation(req, res, next) {
  return (0, _validator["default"])(_signup["default"], req.body, res, next);
};
exports.employeeSignupValidation = employeeSignupValidation;