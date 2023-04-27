"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _response = _interopRequireDefault(require("./response"));
var _default = function _default(schema, toValidate, res, next) {
  var _schema$validate = schema.validate(toValidate),
    error = _schema$validate.error;
  return error ? (0, _response["default"])(res, 422, error.message, null, 'VALIDATION_ERROR') : next();
};
exports["default"] = _default;