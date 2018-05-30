// Server.js - Running the Node/Express Server

// Declare dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var app = express();

// Require Models
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set-up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes //
require("../routes/api-routes.js")(app);

// Insert static directory here (public)
app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


