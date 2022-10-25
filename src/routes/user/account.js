const express = require("express");
const router = express.Router();
const accountController = require("../../app/controllers/accountControllers");

router.get("/login", accountController.login);
router.post("/login/infor", accountController.infor);
router.get("/register", accountController.register);
router.post("/register/create/save",accountController.save)
module.exports = router;