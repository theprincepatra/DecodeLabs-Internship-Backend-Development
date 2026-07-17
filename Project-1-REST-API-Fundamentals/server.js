const express = require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to REST API Fundamentals",
        project: "Backend Development Project 1",
        developer: "Prince Patra"
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




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});