const express = require("express");
const router = express.Router();

const {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
} = require("../controllers/ProjectController");

const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, createProject);
router.get("/", protect, getProjects);
router.get("/:id", protect, getProject);
router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);

module.exports = router;