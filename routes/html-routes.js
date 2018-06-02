// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads mainPage.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainPage.html"));
  });

  app.get("/userhome", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userHome.html"));
  });

};

// 

// Home Page (/)

app.get('/', function(req, res) {
  res.render('mainPage.html'); // load the mainPage.html file
});


// Login Page (/login)



// Signup Page (/signup)


// Handle the POST for both login


// Handle the POST for both signup


// Profile Page (after logged in)
