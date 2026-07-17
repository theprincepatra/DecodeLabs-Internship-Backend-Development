const users = require("../data/users");

const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
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
};

// CREATE User
const createUser = (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).json({
            success: false,
            message: "Please provide name, email and age."
        });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
        age
    };
    users.push(newUser);
    res.status(201).json({
        success: true,
        message: "User created successfully.",
        data: newUser
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const { name, email, age } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;
    res.status(200).json({
        success: true,
        message: "User updated successfully.",
        data: user
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const deletedUser = users.splice(index, 1);
    res.status(200).json({
        success: true,
        message: "User deleted successfully.",
        data: deletedUser[0]
    });
};

module.exports = {getAllUsers, getUserById, createUser, updateUser, deleteUser};