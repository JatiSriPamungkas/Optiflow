const express = require("express");

const ListControllers = require("../controllers/lists.js");

const router = express.Router();

// CREATE LIST TASK - POST
router.post("/", ListControllers.createNewList);

// READ LIST TASK - GET
router.get("/", ListControllers.getAllList);

// UPDATE LIST TASK - PATCH
router.patch("/:idList", ListControllers.updateList);

// DELETE LIST TASK - DELETE
router.delete("/:idUser", ListControllers.deleteList);

module.exports = router;
