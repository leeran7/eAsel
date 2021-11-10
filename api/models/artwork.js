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
    description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
    },
    category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
    }, 
    uri: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
    }, 
    time_sold: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    }, 
    
  }, {
    sequelize,
    modelName: 'artwork'
  });

  Artwork.associate = (models) => {
    // associations can be defined here
    // Artwork.belongsTo(models.User, { foreignKey: "artwork_id"});
    // Artwork.belongsTo(models.User);
  };

  return Artwork;
};