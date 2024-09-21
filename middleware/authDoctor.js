require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.doctor = decoded.doctor;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid " });
  }
};
