const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Secure Authentication System API"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`);
});