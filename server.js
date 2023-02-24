const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routers = require("./route");
const { RateLimiter } = require("./utils");
const { logRequests, logger } = require("./utils/logger");

// Create express app
const app = express();

// Setup middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
// Start server
const port = process.env.PORT || 9090;

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost/employees", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(port, () => {
            console.log("Server Listening on Port ", port);
        })
    )
    .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define API routes
app.use(RateLimiter.limiter);
app.use(logRequests);
app.use("/employee", routers.Employee);

// Handle errors
app.use((err, req, res, next) => {
    logger.error(err.message);
    const status = err.status || 500; // Internal Server Error by default
    const message = err.message || 'Something went wrong';
    res.status(status).json({ message });
});

