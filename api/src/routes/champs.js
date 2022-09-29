const axios = require("axios");
const express = require("express");
const router = express.Router();
const { Champ } = require("../db.js");
const { getChamps } = require("./controller.js");

//GET CHAMPS
router.get("/", async (req, res, next) => {
  const allChamps = await getChamps();
  try {
    res.status(200).json(allChamps);
  } catch (error) {
    next(error);
  }
});


//POST NEW CHAMP
router.post("/create", async (req, res, next) => {
  const { name, title, blurb, attack, defense, magic, difficulty, image } =
    req.body;
  if ((!name, !title, !attack, !defense, !magic, !difficulty))
    res.status(400).json("Missing Parameters");
  try {
    const newChamp = await Champ.create({
      name,
      title,
      blurb,
      attack,
      defense,
      magic,
      difficulty,
      image:
        image ||
        "https://www.masgamers.com/wp-content/uploads/2021/10/jinx-league-of-legends.jpg",
    });
    res.status(200).json(newChamp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
