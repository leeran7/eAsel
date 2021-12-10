'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Artwork extends Model {}

  Artwork.init({
    // artwork_id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    title: {
      type: DataTypes.STRING,
      validate: {
        // notEmpty: true
      }
    },
    artistName: {
      type: DataTypes.STRING,
      validate: {
        // notEmpty: true
      }
    },
    description: {
        type: DataTypes.STRING,
        validate: {
          // notEmpty: true
        }
    },
    dimensionX: {
        type: DataTypes.INTEGER
    },
    dimensionY: {
        type: DataTypes.INTEGER
    },
    dimensionZ: {
        type: DataTypes.INTEGER
    },
    genre: {
        type: DataTypes.STRING,
        validate: {
          // notEmpty: true
        }
    }, 
    uri: {
        type: DataTypes.STRING,
        validate: {
          // notEmpty: true
        }
    }, 
    price: {
        type: DataTypes.INTEGER
    }, 
    isForSale: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'artwork'
  });

  Artwork.associate = (models) => {
    // associations can be defined here
    Artwork.belongsTo(models.User);
    Artwork.hasMany(models.Transaction);
    // Artwork.belongsTo(models.Cartitem);
    // Artwork.belongsToMany(models.User, { through: "transactions" });
    // Artwork.belongsToMany(models.User, { through: "Buyer" });
  };

  return Artwork;
};