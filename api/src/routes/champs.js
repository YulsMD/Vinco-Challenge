const axios = require("axios");
const express = require("express");
const router = express.Router();
const { Champ } = require("../db.js");
const { getAllChamps, getChampDetails } = require("./controller/index.js");

//GET CHAMPS
router.get("/", async (req, res, next) => {
  let allChamps = await getAllChamps();
  try {
    res.status(200).json(allChamps);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    let champDetail = await getChampDetails(id)
    res.status(200).json(champDetail);
  } catch (error) {
    next(error);
  }
})

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
    res.status(200).json("success");
  } catch (error) {
    next(error);
  }
});

//UPDATE A CHAMP
router.put("/update/:id", async (req, res, next) =>{
  const id = req.params.id;
  try {
    const champ = await Champ.findOne({where: {id:id}});
    champ.blurb = req.body.blurb
    await champ.save()
    res.json("update")
    
  } catch (error) {
    next(error);
  }
})

//DELETE A CHAMP
router.delete("/delete/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Champ.destroy({where: {id: id}});
    res.json("remove")
  } catch (error) {
    next(error);
  }
})
module.exports = router;
