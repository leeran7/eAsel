'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init({
        // trans_id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
    user_purchased: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    user_sold: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {
    sequelize,
    modelName: 'transaction'
  });

  Transaction.associate = (models) => {
    // associations can be defined here
    // Transaction.belongsTo(models.User, { foreignKey: "trans_id"});
    Transaction.belongsTo(models.User);
  };

  return Transaction;
};