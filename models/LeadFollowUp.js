const mongoose = require("mongoose");

const leadFollowUpSchema = new mongoose.Schema(
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

    followUpDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    },

    remarks: {
        type: String
    }

},
{ timestamps: true }
);

module.exports = mongoose.model("LeadFollowUp", leadFollowUpSchema);