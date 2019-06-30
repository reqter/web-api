var express = require('express');
var cors = require('cors')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var compression = require('compression');
var router = express.Router()


var app = express();

app.use(compression()); //Compress all routes
app.use(helmet());
app.use(cors());

var oauth = require('./routes/oauth');
var apps = require('./routes/apps');
var ctypes = require('./routes/contentTypes');
var assets = require('./routes/assets');
var contents = require('./routes/contents');
var categories = require('./routes/categories');
var spaces = require('./routes/spaces');
var requests = require('./routes/requests');

// a middleware function with no mount path. This code is executed for every request to the router

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", oauth);
app.use("/apps", apps);
app.use("/ctypes", ctypes);
app.use("/assets", assets);
app.use("/contents", contents);
app.use("/categories", categories);
app.use("/spaces", spaces);
app.use("/requests", requests);
module.exports = app;
