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

app.get('/login', function(req, res) {

  // Don't think we need this to render, but maybe to contain other coding

});

// process the login form
// app.post('/login', do all our passport stuff here);

// =====================================
// SIGNUP ==============================
// =====================================
// show the signup form
app.get('/signup', function(req, res) {

  // Don't think we need this to render, but maybe to contain other coding
  
});

  // process the signup form
  // app.post('/signup', do all our passport stuff here);

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)

app.get('/userHome', isLoggedIn, function(req, res) {
  res.render('userHome.html', {
      user : req.user // get the user out of session and pass to template
  });
});

// =====================================
// LOGOUT ==============================
// =====================================
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}


