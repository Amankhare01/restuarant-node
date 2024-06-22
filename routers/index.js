const express = require("express");
const { register, searchRes, bookTable, addSlot } = require("../controllers");

const router = express.Router();

router.post("/register", register);
router.get("/search", searchRes);
router.post("/book-table", bookTable);
router.post("/add-slot", addSlot);

module.exports = router;
