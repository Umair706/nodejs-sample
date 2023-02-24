const winston = require("winston");

// Create a logger instance with a console transport
const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
});

// Log incoming requests middleware
const logRequests = (req, res, next) => {
    logger.info(`Incoming ${req.method} request to ${req.originalUrl}`, {
        body: req.body,
        params: req.params,
        query: req.query,
    });
    next();
};

module.exports = { logRequests, ...logger };
