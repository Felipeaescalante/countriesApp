const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {  // por definir
    // defino el modelo

    const Activities = sequelize.define('activities', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      challenge: {
      type: DataTypes.ENUM ("1","2","3","4","5") // 
      },

      duration: {
        type: DataTypes.INTEGER,
      },

      season: {
          type: DataTypes.ENUM("winter", "autum", "spring", "summer"),
      }
    });
  };
  