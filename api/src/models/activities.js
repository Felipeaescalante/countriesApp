const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {  // por definir
    // defino el modelo

    const Activities = sequelize.define('activities', {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Challenge: {
      type: DataTypes.ENUM ("1","2","3","4","5") // 
      },

      Duration: {
        type: DataTypes.ENUM ("1","2","3","4","5")
      },

      Season: {
          type: DataTypes.ENUM("winter", "autum", "spring", "summer"),
      }
    });
  };
  