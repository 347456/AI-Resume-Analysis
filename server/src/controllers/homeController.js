const home = (req, res) => {
    res.json({
        success: true,
        message: "Welcome to AI Resume Analysis API 🚀"
    });
};

const health = (req, res) => {
    res.json({
        success: true,
        message: "Server is running..."
    });
};

module.exports = {
    home,
    health
};
