const Lead = require("../models/Lead");


// CREATE LEAD
exports.createLead = async (req, res) => {
    try {

        const lead = await Lead.create({
            ...req.body,
            createdBy: req.user._id
        });

        res.status(201).json({
            message: "Lead created successfully",
            lead
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET ALL LEADS
exports.getLeads = async (req, res) => {
    try {

        const leads = await Lead.find()
            .populate("assignedTo", "name email")
            .populate("createdBy", "name email");

        res.json(leads);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET SINGLE LEAD
exports.getLead = async (req, res) => {
    try {

        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({
                message: "Lead not found"
            });
        }

        res.json(lead);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE LEAD
exports.updateLead = async (req, res) => {
    try {

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Lead updated successfully",
            lead
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE LEAD
exports.deleteLead = async (req, res) => {
    try {

        await Lead.findByIdAndDelete(req.params.id);

        res.json({
            message: "Lead deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};