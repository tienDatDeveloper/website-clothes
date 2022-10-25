const express = require("express");
const router = express.Router();

const typeController = require("../../app/controllers/admin/typeClothesControllers");

router.delete("/:id",typeController.delete)
router.put("/:id",typeController.update)
router.post("/create/save",typeController.save)
router.get("/create", typeController.create);
router.get("/:id/edit",typeController.edit)
router.use("/",typeController.show)

module.exports = router;
