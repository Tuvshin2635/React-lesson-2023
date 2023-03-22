const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access- token"];

  if (!token) {
    return req.status(403).json({
      succees: false,
      message: "hereglegchiin token oruulax",
    });
  }

  try {
    const decoded = jwt.verify(token, "mySuperDuperPrivateKey");
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({
      succees: false,
      message: "hereglegchiin ner esvel pass idevxgui bna",
    });
  }
  return next();
};

module.exports = verifyToken;
