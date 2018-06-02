// Server.js - Running the Node/Express Server

// Declare dependencies
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var sequelize = require('sequelize');
var passport = require('passport');
var flash    = require('connect-flash');

var david        = require('david')
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


// Require Models
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// Routes //
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Insert static directory here (public)
app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


