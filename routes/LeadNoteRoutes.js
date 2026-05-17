const express = require("express");
const router = express.Router();

const {
    addNote,
    getNotes
} = require("../controllers/LeadNoteController");

const { protect } = require("../middlewares/authMiddleware");

router.post("/:leadId", protect, addNote);
router.get("/:leadId", protect, getNotes);

module.exports = router;