var db = require("../models");

module.exports = function(app) {
    // GET-all posts
    app.get("/api/pets", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }

        db.Pet.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbPet) {
            res.json(dbPet);
        });
    });
//   GET- single post
    app.get("/api/posts/:id", function(req, res) {
        db.Pet.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbPet) {
            res.json(dbPet);
        });
    });
  
    // POST
    app.get("/api/pets", function(req, res) {
        db.Pet.create(req.body).then(function(dbPet) {
            res.json(dbPost);
        });

    });

    // Delete- to delete posts
    app.delete("/api/pets/:id", function(req, res) {
        db.Pet.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPet) {
            res.json(dbPet);
        });
    });

    //  Put route for updating pets
    app.put("/api/pets", function(req, res) {
        db.Pet.update(
            req.body,
            {
            where: {
                id: req.body.id
            }
            }).then(function(dbPost){
                res.json(dbPet);
            });
    });


};