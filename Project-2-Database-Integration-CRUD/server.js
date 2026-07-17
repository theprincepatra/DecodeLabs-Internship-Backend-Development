require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Database Integration (CRUD) API"
    });
});

app.use("/api/users", userRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();