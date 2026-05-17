const Task = require("../models/Task");


// CREATE TASK
exports.createTask = async (req, res) => {
    try {

        const task = await Task.create({
            ...req.body,
            createdBy: req.user._id
        });

        res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET TASKS (ROLE BASED)
exports.getTasks = async (req, res) => {
    try {

        let filter = {};

        // 👇 ROLE LOGIC (IMPORTANT)
        if (req.user.role === "admin" || req.user.role === "project_manager") {
            filter = {}; // all tasks
        } else {
            filter = { assignedTo: req.user._id }; // only own tasks
        }

        const tasks = await Task.find(filter)
            .populate("project", "title")
            .populate("assignedTo", "name email role")
            .populate("createdBy", "name email");

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// UPDATE TASK
exports.updateTask = async (req, res) => {
    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// DELETE TASK
exports.deleteTask = async (req, res) => {
    try {

        await Task.findByIdAndDelete(req.params.id);

        res.json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};