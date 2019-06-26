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

// a middleware function with no mount path. This code is executed for every request to the router

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", oauth);
module.exports = app;
