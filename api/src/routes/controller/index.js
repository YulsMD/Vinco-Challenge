const axios = require("axios");

const { Champ } = require("../../db.js");


/**
 * It gets the data from the API, then it maps the data into an array of objects, then it returns the
 * array of objects
 */
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
      tags: e.tags,
      image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${e.id}_0.jpg`,
      createdByMe: false,
    };
  });
  return response;
}

/**
 * It takes the data from the database and maps it to a new object with the same properties, but with a
 * new property called createdByMe.
 */
async function getDBChamps() {
  const DBChamps = await Champ.findAll();
  const champsMapped = DBChamps.map((e) => {
    return {
      id: e.id,
      key: e.name,
      name: e.name,
      title: e.title,
      tags: e.tags.split(","),
      image: e.image,
      createdByMe: true,
    };
  });
  return champsMapped;
}

/**
 * Get all champs from the database and the API, then return them.
 */
async function getAllChamps() {
  const DB_Champs = await getDBChamps();
  const API_Champs = await getAPIChamps();
  const allChamps = API_Champs.concat(DB_Champs);
  return allChamps;
}

/**
 * It takes in a champion id, makes an API call to the Riot Games API, and returns an array of objects
 * containing the champion's details.
 */
async function getChampDetails(id) {
  const details = (
    await axios(
      `https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${id}.json`
    )
  ).data.data;
  const champDetails = Object.values(details);
  const mapped = champDetails.map((e) => {
    return {
      id: e.id,
      key: e.key,
      name: e.name,
      title: e.title,
      tags: e.tags,
      lore: e.lore,
      image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${e.id}_0.jpg`,
      createdByMe: false
    };
  });
  return mapped;
}

/**
 * It takes the id of a champion from the database and returns an array with the champion's details.
 */
async function getChampDetails_DB(id) {
  const DBChamps = await Champ.findOne({ where: { id: id } });
  const champDB = Object.values(DBChamps);
  const champDetail_DB = champDB.map((e) => {
    return {
      id: e.id,
      key: e.key,
      name: e.name,
      title: e.title,
      tags: [e.tags],
      lore: e.lore,
      image: e.image,
      createdByMe: true,
    };
  });
  const champFinal = [champDetail_DB[0]]
  return champFinal;
}

module.exports = {
  getAllChamps,
  getChampDetails,
  getChampDetails_DB,
};
