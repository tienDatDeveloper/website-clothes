const express = require("express");
const router = express.Router();
// const middlewareController = require("../../app/controllers/middleware/middlewareControllers");
const verifyToken = require('../../app/middleware/auth')
const homeController = require("../../app/controllers/homeControllers");
router.get("/", homeController.home);
// router.get("/", homeController.home);
module.exports = router;