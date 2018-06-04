// api-routes.js - Connecting to the Databse

var db = require("../models");

// Wrap all routes in a module.exports function
module.exports = function(app) {
    // Create new user
    app.post("/signup", function(req, res){
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            user_email: req.body.email,
            user_pass: req.body.user_pass
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
    // Login existing user - needs a GET and POST
    app.get("/login", function(req,res) {
        db.User.findOne({
            where:  {
                id: req.params.id
            },
            include: [db.Pet]
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
};


