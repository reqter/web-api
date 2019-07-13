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
var ctypes = require('./routes/contentTypes');
var assets = require('./routes/assets');
var categories = require('./routes/categories');
var spaces = require('./routes/spaces');
var forms = require('./routes/forms');
var requests = require('./routes/requests');
var quotes = require('./routes/quote');
var contacts = require('./routes/contacts');
var companies = require('./routes/companies');

// a middleware function with no mount path. This code is executed for every request to the router

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", oauth);
app.use("/ctypes", ctypes);
app.use("/assets", assets);
app.use("/categories", categories);
app.use("/spaces", spaces);
app.use("/forms", forms);
app.use("/requests", requests);
app.use("/quotes", quotes);
app.use("/contacts", contacts);
app.use("/compnaies", companies);
module.exports = app;
