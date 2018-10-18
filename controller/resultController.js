const db = require("../models");

module.exports = {
  //finds everything in the database
  findAll: function(req, res) {
    db.Result
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  //makes a new document and let's you know if you've already done that today
  create: function(req, res) {
    db.Result
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log("There's already a document for today!"));
  },
  //finds the result type (chiligirl, unicorn, chilicorn) for the specific and updates the amount by 1
  update: function(req, res) {
    db.Result
      .findOneAndUpdate({ 'resultType.name': req.body.resultType, 'date': req.body.date }, {$inc: {'resultType.$.amount': 1}}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
