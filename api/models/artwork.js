'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Artwork extends Model {}

  Artwork.init({
    description: {
        type: DataTypes.STRING,
        validate: {
          len: [28, 50],
          notEmpty: true,
        }
    },
    category: {
        type: DataTypes.STRING,
        validate: {
          len: [26, 50],
          notEmpty: true,
        }
    }, 
    uri: {
        type: DataTypes.STRING,
        validate: {
          len: [12, 30],
          notEmpty: true,
        }
    }, 
    time_added: {
        type: DataTypes.STRING,
        validate: {
          len: [25, 50],
          notEmpty: true,
        }
    },
    time_sold: {
        type: DataTypes.STRING,
        validate: {
          len: [25, 50],
          notEmpty: true,
        }
    },
    price: {
        type: DataTypes.INTEGER,
        validate: {
          len: [25, 50],
          notEmpty: true,
        }
    }, 
    artwork_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'artwork'
  });

  Artwork.associate = (models) => {
    // associations can be defined here
    Artwork.belongsTo(models.User, { foreignKey: "artwork_id", as: "artwork" });
  };

  return Artwork;
};