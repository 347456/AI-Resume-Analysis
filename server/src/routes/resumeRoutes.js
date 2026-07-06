const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadResume } = require("../controllers/resumeController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("resume"), uploadResume);

module.exports = router;