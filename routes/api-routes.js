// api-routes.js - Connecting to the Databse

var db = require("../models");

// Wrap all routes in a module.exports function
module.exports = function(app) {
    // GET all users
    app.get("/api/user", function(req,res) {
        db.User.findAll({
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
    // GET specific user by id
    app.get("/api/user/:id", function(req,res) {
        db.User.findOne({
            where:  {
                id: req.params.id
            },
            include: [db.Pet]
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
    // POST routes
    // Create New User
    app.post("/api/signup", function(req, res){
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            userPass: req.body.userPass
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
    
    // PUT
    // DELETE
};


