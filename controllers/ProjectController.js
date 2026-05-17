const Project = require("../models/Project");


// CREATE PROJECT
exports.createProject = async (req, res) => {
    try {

        const project = await Project.create({
            ...req.body,
            createdBy: req.user._id
        });

        res.status(201).json({
            message: "Project created successfully",
            project
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET ALL PROJECTS
exports.getProjects = async (req, res) => {
    try {

        const projects = await Project.find()
            .populate("createdBy", "name email");

        res.json(projects);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET SINGLE PROJECT
exports.getProject = async (req, res) => {
    try {

        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        res.json(project);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// UPDATE PROJECT
exports.updateProject = async (req, res) => {
    try {

        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Project updated successfully",
            project
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// DELETE PROJECT
exports.deleteProject = async (req, res) => {
    try {

        await Project.findByIdAndDelete(req.params.id);

        res.json({
            message: "Project deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};