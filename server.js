const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const authRoutes = require("./routes/AuthRoutes");
const { protect } = require("./middlewares/authMiddleware");
const { authorizeRoles } = require("./middlewares/roleMiddleware");

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("MongoDB Connection Failed:", err);
});

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({ success: 'CRM API is running...' })
});

// TEST PROTECTED ROUTE
app.get("/api/test-protected", protect, (req, res) => {
    res.json({
        message: "You are authorized",
        user: req.user
    });
});


app.get(
    "/api/admin-only",
    protect,
    authorizeRoles("admin"),
    (req, res) => {
        res.json({ message: "Welcome Admin" });
    }
);

// Other Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});