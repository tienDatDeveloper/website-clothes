const express = require("express");
const router = express.Router();
const detailController = require("../../app/controllers/detailControllers");

router.get("/:slug", detailController.show);

module.exports = router;