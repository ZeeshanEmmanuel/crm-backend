const Deal = require("../models/Deal");


// CREATE DEAL
exports.createDeal = async (req, res) => {
    try {

        const deal = await Deal.create({
            ...req.body,
            createdBy: req.user._id
        });

        res.status(201).json({
            message: "Deal created successfully",
            deal
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET ALL DEALS
exports.getDeals = async (req, res) => {
    try {

        const deals = await Deal.find()
            .populate("lead", "name email")
            .populate("assignedTo", "name email")
            .populate("createdBy", "name email");

        res.json(deals);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET SINGLE DEAL
exports.getDeal = async (req, res) => {
    try {

        const deal = await Deal.findById(req.params.id);

        if (!deal) {
            return res.status(404).json({
                message: "Deal not found"
            });
        }

        res.json(deal);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE DEAL
exports.updateDeal = async (req, res) => {
    try {

        const deal = await Deal.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Deal updated successfully",
            deal
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE DEAL
exports.deleteDeal = async (req, res) => {
    try {

        await Deal.findByIdAndDelete(req.params.id);

        res.json({
            message: "Deal deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};