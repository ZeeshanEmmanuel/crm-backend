const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    status: {
        type: String,
        enum: ["pending", "inprogress", "onhold", "completed", "cancelled"],
        default: "pending"
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high", "critical"],
        default: "medium"
    },

    startDate: {
        type: Date
    },

    endDate: {
        type: Date
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
{ timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);