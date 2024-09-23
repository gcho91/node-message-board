const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");

router.get("/", controller.getMessages);
router.get("/messages/:id", controller.findMessageById);
router.get("/new", (req, res) => res.render("form"));
router.post("/new", controller.postNewMessage);
router.post("/delete/:id", controller.handleDeleteRequest);

module.exports = router;
