const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('champ', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      blurb: {
        type: DataTypes.STRING
      },
      attack: {
        type: DataTypes.STRING,
        allowNull:false
      },
      defense: {
        type: DataTypes.STRING,
        allowNull:false
      },
      magic: {
        type: DataTypes.STRING,
        allowNull:false
      },
      difficulty: {
        type: DataTypes.STRING
      },
      image : {
        type: DataTypes.STRING
      },
      createdByMe: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false //omit createdAt and updatedAt
    });
  };
  