const express = require("express");

const {getAllUsers,getUserById,createUser,updateUser,deleteUser} = require("../controllers/userController");

const router = express.Router();

// GET All Users
router.get("/", getAllUsers);

// GET User By ID
router.get("/:id", getUserById);

// CREATE User
router.post("/", createUser);

// UPDATE User
router.put("/:id", updateUser);

// DELETE User
router.delete("/:id", deleteUser);

module.exports = router;