const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    company: {
        type: String
    },

    source: {
        type: String,
        default: "manual"
    },

    stage: {
        type: String,
        enum: [
            "new",
            "contacted",
            "qualified",
            "proposal",
            "won",
            "lost"
        ],
        default: "new"
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

module.exports = mongoose.model("Lead", leadSchema);