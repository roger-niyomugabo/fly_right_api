"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = exports.sign = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("./config"));
/* eslint-disable import/prefer-default-export */

var sign = function sign(payload) {
  return _jsonwebtoken["default"].sign(payload, _config["default"].JWT_SECRET);
};
exports.sign = sign;
var verify = function verify(payload) {
  return _jsonwebtoken["default"].verify(payload, _config["default"].JWT_SECRET);
};
exports.verify = verify;