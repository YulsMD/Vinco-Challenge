const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // Define the model
    sequelize.define('champ', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lore: {
        type: DataTypes.STRING
      },
      tags: {
        type: DataTypes.STRING,
        allowNull:false
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
  