const db = require("../models");

// Currently only one user is being updated and used.
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
      .find({ name: "Nicholassss" })
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
      .findOneAndUpdate({ name: "Nicholassss" }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ name: "Nicholassss" })
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
