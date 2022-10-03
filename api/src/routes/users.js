const express = require("express");
const router = express.Router();
const { User } = require("../db.js");
const bcrypt = require('bcrypt')

/* Creating a new user.  This end point, was not implemented in front end. */
router.post("/create", async (req, res, next) => {
  const { name, password, email } = req.body;
  try {
    const user = await User.findOne({ where: { name } });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = await User.create({
        name,
        password,
        email,
      });
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();
      res.status(200).json("success");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
