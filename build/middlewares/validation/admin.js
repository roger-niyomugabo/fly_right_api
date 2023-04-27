"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginValidation = exports.adminSignupValidation = void 0;
var _validator = _interopRequireDefault(require("../../helpers/validator"));
var _signup = _interopRequireDefault(require("./schemas/admin/signup"));
var _login = _interopRequireDefault(require("./schemas/admin/login"));
/* eslint-disable import/prefer-default-export */

var adminSignupValidation = function adminSignupValidation(req, res, next) {
  return (0, _validator["default"])(_signup["default"], req.body, res, next);
};
exports.adminSignupValidation = adminSignupValidation;
var loginValidation = function loginValidation(req, res, next) {
  return (0, _validator["default"])(_login["default"], req.body, res, next);
};
exports.loginValidation = loginValidation;