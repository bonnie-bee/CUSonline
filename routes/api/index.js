const router = require("express").Router();
const resultRoutes = require("./result");

// Book routes
router.use("/results", resultRoutes);

module.exports = router;