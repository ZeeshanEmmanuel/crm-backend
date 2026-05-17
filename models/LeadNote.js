const mongoose = require("mongoose");

const leadNoteSchema = new mongoose.Schema(
{
    lead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lead",
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    note: {
        type: String,
        required: true
    }

},
{ timestamps: true }
);

module.exports = mongoose.model("LeadNote", leadNoteSchema);