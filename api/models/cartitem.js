'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Cartitem extends Model {}

  Cartitem.init({
    
    
  }, {
    sequelize,
    modelName: 'cartitem'
  });

  Cartitem.associate = (models) => {
    // associations can be defined here
    // Cartitem.belongsTo(models.Cart);
    Cartitem.belongsTo(models.Cart, { as: "cart" });
    Cartitem.belongsTo(models.Artwork, { as: "artwork" });
  };

  return Cartitem;
};