const express = require("express");
const router = express.Router();

const {
    addFollowUp,
    getFollowUps
} = require("../controllers/LeadFollowUpController");

const { protect } = require("../middlewares/authMiddleware");

router.post("/:leadId", protect, addFollowUp);
router.get("/:leadId", protect, getFollowUps);

module.exports = router;