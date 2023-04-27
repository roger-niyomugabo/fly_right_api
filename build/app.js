"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _expressFileupload = _interopRequireDefault(require("express-fileupload"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swagger = _interopRequireDefault(require("../swagger.json"));
var _dbConnect = _interopRequireDefault(require("./database/dbConnect"));
var _routes = _interopRequireDefault(require("./routes"));
var app = (0, _express["default"])();
(0, _dbConnect["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.enable('trust proxy');
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _expressFileupload["default"])({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use('/api', _routes["default"]);
var _default = app;
exports["default"] = _default;