const axios = require("axios");

const { Champ } = require("../db.js");

async function getChamps() {
  const getData = (
    await axios(
      "https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json"
    )
  ).data.data;

  const arrayData = Object.values(getData)

  const response = await arrayData.map((e) => {
    return {
      id: e.id,
      name: e.name,
      title: e.title,
      blurb: e.blurb,
      info: {
        attack: e.info.attack,
        defense: e.info.defense,
        magic: e.info.magic,
        difficulty: e.info.difficulty,
      },
      image: e.image
    };
  });
  return response;
}

module.exports = {
  getChamps
}
