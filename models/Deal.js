const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    lead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lead"
    },

    value: {
        type: Number,
        default: 0
    },

    stage: {
        type: String,
        enum: [
            "new",
            "qualified",
            "proposal",
            "negotiation",
            "won",
            "lost"
        ],
        default: "new"
    },

    expectedCloseDate: {
        type: Date
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
{ timestamps: true }
);

module.exports = mongoose.model("Deal", dealSchema);