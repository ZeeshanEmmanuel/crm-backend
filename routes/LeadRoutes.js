const express = require("express");
const router = express.Router();

const {
    createLead,
    getLeads,
    getLead,
    updateLead,
    deleteLead
} = require("../controllers/LeadController");

const { protect } = require("../middlewares/authMiddleware");


// CREATE
router.post("/", protect, createLead);

// GET ALL
router.get("/", protect, getLeads);

// GET SINGLE
router.get("/:id", protect, getLead);

// UPDATE
router.put("/:id", protect, updateLead);

// DELETE
router.delete("/:id", protect, deleteLead);


module.exports = router;