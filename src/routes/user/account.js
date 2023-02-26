const express = require("express");
const router = express.Router();
const accountController = require("../../app/controllers/accountControllers");
const auth = require('../../app/middleware/auth')
router.get("/login", accountController.login);
router.post("/login/infor", accountController.infor);
// router.post("/login/infor", accountController.infor);
router.get("/register", accountController.register);
router.post("/register/create/save",accountController.save)
router.get("/logout", accountController.logout);
module.exports = router;