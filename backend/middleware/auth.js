const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log(token);
    const token = localStorage.getItem("token");
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
