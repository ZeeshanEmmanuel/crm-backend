const LeadFollowUp = require("../models/LeadFollowUp");


// ADD FOLLOWUP
exports.addFollowUp = async (req, res) => {
    try {

        const followup = await LeadFollowUp.create({
            lead: req.params.leadId,
            user: req.user._id,
            followUpDate: req.body.followUpDate,
            remarks: req.body.remarks
        });

        res.status(201).json({
            message: "Follow-up added successfully",
            followup
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET FOLLOWUPS
exports.getFollowUps = async (req, res) => {
    try {

        const followups = await LeadFollowUp.find({
            lead: req.params.leadId
        })
        .populate("user", "name email")
        .sort({ followUpDate: 1 });

        res.json(followups);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};