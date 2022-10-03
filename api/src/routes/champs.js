const axios = require("axios");
const express = require("express");
const router = express.Router();
const { Champ } = require("../db.js");
const { getAllChamps, getChampDetails, getChampDetails_DB } = require("./controller/index.js");


/* A route that is going to get all the champs from the database. */
router.get("/", async (req, res, next) => {
  let allChamps = await getAllChamps();
  try {
    res.status(200).json(allChamps);
  } catch (error) {
    next(error);
  }
});

/* A route that is going to get the details of a champ from the database. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    if(isNaN(id)=== true){
      let champDetail = await getChampDetails(id)
      res.status(200).json(champDetail);
    } else{
      let champDetailDB = await getChampDetails_DB(id)
      res.status(200).json(champDetailDB);
    }
  } catch (error) {
    next(error);
  }
})


/* Creating a new champ in the database. */
router.post("/create", async (req, res, next) => {
  const { name, title, lore, tags, image } =
    req.body;
  if ((!name, !title, !lore, !tags))
    res.status(400).json("Missing Parameters");
  try {
    const newChamp = await Champ.create({
      name,
      title,
      lore,
      tags: tags.toString(),
      image:
        image ||
        "https://www.masgamers.com/wp-content/uploads/2021/10/jinx-league-of-legends.jpg",
    });
    res.status(200).json("success");
  } catch (error) {
    next(error);
  }
});


/* Updating the blurb of a champ. */
router.put("/update/:id", async (req, res, next) =>{
  const id = req.params.id;
  try {
    const champ = await Champ.findOne({where: {id:id}});
    champ.lore = req.body.lore
    await champ.save()
    res.json("update")
    
  } catch (error) {
    next(error);
  }
})


/* Deleting a champ from the database. */
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
