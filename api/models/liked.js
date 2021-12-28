'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Liked extends Model {}

  Liked.init({
  }, {
    sequelize,
    modelName: "liked"
  });

  Liked.associate = (models) => {
    Liked.belongsTo(models.Artwork);
    Liked.belongsTo(models.User);
  };

  return Liked;
};