'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {}

  Cart.init({
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cart_items: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    user_id: {
        type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'cart'
  });

  Cart.associate = (models) => {
    // associations can be defined here
    
  };

  return Cart;
};