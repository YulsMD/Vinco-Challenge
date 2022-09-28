const axios  = require("axios");
const express = require('express');
const router = express.Router();
const { Champ } = require ('../db.js');
const { getChamps } = require("./controller.js");

router.get('/', async (req, res, next)=>{
  const { name } = req.query;
  const allChamps = await getChamps();

})

module.exports = router