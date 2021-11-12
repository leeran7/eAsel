'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {}

  Cart.init({
    // cart_id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    cart_items: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {
    sequelize,
    modelName: 'cart'
  });

  Cart.associate = (models) => {
    // associations can be defined here
    // Cart.belongsTo(models.User, { foreignKey: "cart_id" });
    Cart.belongsTo(models.User);
  };

  return Cart;
};