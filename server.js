// Server.js - Running the Node/Express Server

// Declare dependencies
var express  = require('express');
var app      = express();
var PORT     = process.env.PORT || 8080;
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

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms

// required for passport
// app.use(session({ secret: 'fureverfriendsisnotinclusive' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes/api-routes.js')(app); // load our routes and pass in our app and fully configured passport
require('./routes/pet-api-routes.js')(app); // load our routes and pass in our app and fully configured passport
require("./routes/html-routes.js")(app); // load our html routes and pass in our app and fully configured passport

// Insert static directory here (public)
app.use(express.static("public"));



// launch ======================================================================
app.listen(PORT, function() {
console.log("The magic happens on PORT" + PORT);
});







