const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
    {
        originalFileName: {
            type: String,
            required: true,
        },

        storedFileName: {
            type: String,
            required: true,
        },

        extractedText: {
            type: String,
            required: true,
        },

        filePath: {
            type: String,
            required: true,
        },

        analysis: {
            type: Object,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Resume", resumeSchema);