const express = require("express");
const router = express.Router();
const listClothes = require("./listClothes");
const typeClothes = require("./typeClothes");
const adminController = require("../../app/controllers/admin/adminControllers");


router.use("/listClothes", listClothes);
router.use("/typeClothes", typeClothes);
router.get("/",adminController.show)


module.exports = router;