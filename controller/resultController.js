const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Result
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  findById: function(req, res) {
    db.Result
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Result
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.Result
      .findOneAndUpdate({ 'resultType.name': req.body.resultType, 'date': req.body.date }, {$inc: {'resultType.$.amount': 1}}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
