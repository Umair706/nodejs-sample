const rateLimit = require("express-rate-limit");
// Create a rate limiter that allows 100 requests per hour per IP address
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100,
  message: "Too many requests from this IP, please try again later",
});
module.exports = { limiter };
