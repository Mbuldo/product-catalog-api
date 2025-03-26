const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to Database
connectDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
