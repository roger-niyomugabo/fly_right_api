"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _http = _interopRequireDefault(require("http"));
var _app = _interopRequireDefault(require("./app"));
var _config = _interopRequireDefault(require("./helpers/config"));
/* eslint-disable no-console */

var PORT = _config["default"].PORT || 3000;
var server = _http["default"].createServer(_app["default"]);
server.listen(PORT, function () {
  return console.log("server up and running on ".concat(PORT));
});