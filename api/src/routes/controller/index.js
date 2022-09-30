const axios = require("axios");

const { Champ } = require("../../db.js");

async function getAPIChamps() {
  const getData = (
    await axios(
      "https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json"
    )
  ).data.data;

  const arrayData = Object.values(getData);

  const response = await arrayData.map((e) => {
    return {
      id: e.id,
      key: e.key,
      name: e.name,
      title: e.title,
      blurb: e.blurb,
      attack: e.info.attack,
      defense: e.info.defense,
      magic: e.info.magic,
      difficulty: e.info.difficulty,
      image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${e.id}_0.jpg`,
      createdByMe:false
    };
  });
  return response;
}

async function getDBChamps(){
 const  DBChamps = await Champ.findAll()
 return DBChamps
}

async function getAllChamps(){
  const DB_Champs = await getDBChamps();
  const API_Champs = await getAPIChamps();
  const allChamps = API_Champs.concat(DB_Champs);
  return allChamps
}

module.exports = {
  getAllChamps
};
