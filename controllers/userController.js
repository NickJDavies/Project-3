const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
  db.User
    .find()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create({
        name: "Nicholassss",
        password: "12345",
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: "5f1fe9f54acd921ec085575b" }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: "5f1fe9f54acd921ec085575b" })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteAll: function(req, res) {
    db.User
      .deleteMany()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
