const express = require("express");
const router = express.Router();
const { User } = require("../../db.js");
const bcrypt = require("bcrypt");
const Token = require("../../utils/generateToken");

/* A post request to login. This end point, was not implemented in front end. */
router.post("/", async (req, res, next) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid credentials" });
      } else {
        res.status(200).json({
          _id: user.id,
          email: user.email,
          token: Token(user.id),
        });
      }
    } else {
      res.status(400).json({ message: "User doesnt exists" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
