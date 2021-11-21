'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init({
  }, {
    sequelize,
    modelName: 'transaction'
  });

  Transaction.associate = (models) => {
    // associations can be defined here
    // Transaction.belongsTo(models.User, { foreignKey: "trans_id"});
    Transaction.belongsTo(models.Artwork);
    Transaction.belongsTo(models.User, { as: "buyer" })
  };

  return Transaction;
};