const router = require("express").Router();
const resultController = require("../../controller/resultController");

// Matches with "/api/results"
router.route("/")
  .get(resultController.findAll)
  .post(resultController.create);

// Matches with "/api/results/update"
router.route("/update")
  .post(resultController.update)

module.exports = router;
 