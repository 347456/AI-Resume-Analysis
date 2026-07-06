const path = require("path");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const { analyzeResume } = require("../services/aiService");

const uploadResume = async (req, res) => {
    try {
        console.log("1. Upload request received in controller");
        if (!req.file) {
            return res.status(400).json({ message: "⚠️ No file uploaded" });
        }

        console.log(`3. File received: ${req.file.path}`);

        const fileBuffer = fs.readFileSync(req.file.path);

        const parsedPdf = await pdfParse(fileBuffer);
        const resumeText = parsedPdf.text;

        console.log("4. PDF text extracted successfully");

        if (!resumeText || resumeText.trim() === "") {
            return res.status(400).json({ message: "⚠️ Could not extract text from this PDF." });
        }

        console.log("5. Sending text to Llama Model for analysis...");

        const aiAnalysis = await analyzeResume(resumeText);

        console.log("6. AI Analysis completed!");

        return res.status(200).json({
            message: "Upload and Analysis Successful",
            extractedText: aiAnalysis 
        });

    } catch (error) {
        console.error("UPLOAD ERROR inside controller:", error);
        return res.status(500).json({
            message: "Internal server error processing file",
            error: error.message
        });
    }
};

module.exports = {
    uploadResume
};
