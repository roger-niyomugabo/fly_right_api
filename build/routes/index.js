"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _admin = _interopRequireDefault(require("./admin"));
var _employee = _interopRequireDefault(require("./employee"));
var router = (0, _express.Router)();
router.use('/admin', _admin["default"]);
router.use('/employee', _employee["default"]);
var _default = router;
exports["default"] = _default;