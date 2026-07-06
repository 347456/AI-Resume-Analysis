const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// REGISTER

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }
};



// LOGIN

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });

        }

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                success: false,
                message: "Invalid Email",
            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({
                success: false,
                message: "Invalid Password",
            });

        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET || "resume_secret_key",
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }
};



// GET PROFILE

exports.getProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select("-password");

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }
};