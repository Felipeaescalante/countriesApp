const { DataTypes } = require('sequelize');
const Activities = require('./Activities');
 

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

 const Country =  sequelize.define('country', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },

    Flag: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Region: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Capital: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Subregion: {
      type: DataTypes.STRING,
    },

    Area: {
      type: DataTypes.STRING,
    },

    Population: {
      type: DataTypes.STRING
    }
  });
};

//Vinculo 
