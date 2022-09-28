const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('champ', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false
      },
      life_span: {
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
  