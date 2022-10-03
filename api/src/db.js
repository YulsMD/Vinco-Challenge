require('dotenv').config();

/* This is the connection to the database. */
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: './champs.sqlite'
  });

  /* Reading the files in the models folder and pushing them into an array. */
  const basename = path.basename(__filename);
  const modelDefiners = [];
  fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

 /* Taking the models and making them uppercase. */
  modelDefiners.forEach(model => model(sequelize));
  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  sequelize.models = Object.fromEntries(capsEntries);

  module.exports = {
    ...sequelize.models, 
    conn: sequelize,     
  };