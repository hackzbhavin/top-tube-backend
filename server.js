// /backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const loggerMiddleware = require("./middleware/logger");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(loggerMiddleware);

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use API routes
app.use("/api", apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
