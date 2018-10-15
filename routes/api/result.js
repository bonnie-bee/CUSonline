const router = require("express").Router();
const resultController = require("../../controller/resultController");

// Matches with "/api/results"
router.route("/")
  .get(resultController.findAll)
  .post(resultController.create);

// Matches with "/api/results/:id"
router.route("/update")
  .get(resultController.findById)
  .post(resultController.update)

module.exports = router;
 