const register = (req, res) => {

    res.status(201).json({
        success: true,
        message: "User Registered Successfully"
    });
    
};

const login = (req, res) => {

    res.status(200).json({
        success: true,
        message: "Login Successful"
    });

};

module.exports = {
    register,
    login
};