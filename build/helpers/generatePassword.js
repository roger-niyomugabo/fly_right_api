"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var generatePassword = function generatePassword() {
  var password = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '1234567890' + '!@#$%^&()_+~`|}{[]:;?><,./-=';
  for (var i = 1; i <= 10; i++) {
    var _char = Math.floor(Math.random() * str.length + 1);
    password += str.charAt(_char);
  }
  return password;
};
var _default = generatePassword;
exports["default"] = _default;