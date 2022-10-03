const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // Define the model
    sequelize.define('user', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    });
  };
  