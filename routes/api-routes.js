// api-routes.js - Connecting to the Databse

var db = require("../models");

// Wrap all routes in a module.exports function
module.exports = function(app) {
    // GET
    app.get("/api/user", function(req,res) {
        db.User.findAll({
            include: [db.Pet]
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });

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
    // POST
    app.post("/api/newuser", function(req, res){
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbAuthor);
        });
    });
    
    // PUT
    // DELETE
}


