const express = require("express");
const router = express.Router();

const {
    createDeal,
    getDeals,
    getDeal,
    updateDeal,
    deleteDeal
} = require("../controllers/DealController");

const { protect } = require("../middlewares/authMiddleware");


// CREATE
router.post("/", protect, createDeal);

// GET ALL
router.get("/", protect, getDeals);

// GET SINGLE
router.get("/:id", protect, getDeal);

// UPDATE
router.put("/:id", protect, updateDeal);

// DELETE
router.delete("/:id", protect, deleteDeal);

module.exports = router;