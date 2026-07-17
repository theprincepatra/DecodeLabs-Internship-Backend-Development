const User = require("../models/User");

// GET All Users
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        next(error);
    }
};

// GET User By ID
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
};

// CREATE User
const createUser = async (req, res, next) => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            return res.status(400).json({
                success: false,
                message: "Please provide name, email and age."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists."
            });
        }

        const user = await User.create({
            name,
            email,
            age
        });

        res.status(201).json({
            success: true,
            message: "User created successfully.",
            data: user
        });
    } catch (error) {
        next(error);
    }
};

// UPDATE User
const updateUser = async (req, res, next) => {
    try {
        const { name, email, age, isActive } = req.body;

        if (email) {
            const existingUser = await User.findOne({ email });

            if (
                existingUser &&
                existingUser._id.toString() !== req.params.id
            ) {
                return res.status(409).json({
                    success: false,
                    message: "Email already exists."
                });
            }
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                age,
                isActive
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully.",
            data: updatedUser
        });
    } catch (error) {
        next(error);
    }
};

// DELETE User
const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully."
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};