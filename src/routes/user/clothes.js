const express = require("express");
const router = express.Router();
const clothesController = require("../../app/controllers/clothesControllers");

router.get("/Clothes", clothesController.show);
router.get("/Clothes/Nam", clothesController.clothesNam);
router.get("/Clothes/Nu", clothesController.clothesNu);
router.get("/PhuKien", clothesController.phukien);


module.exports = router;