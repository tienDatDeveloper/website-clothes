const express = require("express");
const router = express.Router();

const listController = require("../../app/controllers/admin/listClothesControllers");

router.delete("/:id",listController.delete)
router.get("/:id/edit",listController.edit)
router.put("/:id",listController.update)
router.post("/create/save",listController.save)
router.get("/create", listController.create);
router.use("/",listController.show)

module.exports = router;
