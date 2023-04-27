"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeeSignupTemplate = void 0;
/* eslint-disable import/prefer-default-export */
var employeeSignupTemplate = function employeeSignupTemplate(info) {
  return "\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Welcome to Fly Right</title>\n  </head>\n  <body style=\"font-family: Arial, sans-serif; margin: 0; padding: 0;\">\n    <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"background-color: #f4f4f4;\">\n      <tr>\n        <td align=\"center\" style=\"padding: 20px 0 10px 0;\">\n          <h1>Welcome to Fly Right ".concat(info.fullName, "!</h1>\n        </td>\n      </tr>\n      <tr>\n        <td align=\"center\" style=\"padding: 10px 0 20px 0; text-decoration: none;\">\n          <p>You have been registered for ").concat(info.jobTitle, " at Fly Right. Your account has been created with the following credentials:</p>\n          <p>You can update any of these credentials or use the existing ones.</p>\n          <p>Keep them and don't share them with anyone for your security.</p>\n          <p><strong>Email: </strong> ").concat(info.email, "</p>\n          <p><strong>Password: </strong> ").concat(info.password, "</p>\n          <p style=\"padding-top: 5px;\"><strong>WE ARE HAPPY TO HAVE YOU!</strong></p>\n        </td>\n      </tr>\n    </table>\n  </body>\n</html>\n");
};
exports.employeeSignupTemplate = employeeSignupTemplate;