const LeadNote = require("../models/LeadNote");


// ADD NOTE
exports.addNote = async (req, res) => {
    try {

        const note = await LeadNote.create({
            lead: req.params.leadId,
            user: req.user._id,
            note: req.body.note
        });

        res.status(201).json({
            message: "Note added successfully",
            note
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET NOTES
exports.getNotes = async (req, res) => {
    try {

        const notes = await LeadNote.find({
            lead: req.params.leadId
        })
        .populate("user", "name email")
        .sort({ createdAt: -1 });

        res.json(notes);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};