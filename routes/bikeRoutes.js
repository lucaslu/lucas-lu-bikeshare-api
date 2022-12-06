const router = require("express").Router();
const bikesController = require("../controllers/bikesController");

router.route("/").get(bikesController.findAll).post(bikesController.add);

router.route("/:id").get(bikesController.findOne);

module.exports = router;
