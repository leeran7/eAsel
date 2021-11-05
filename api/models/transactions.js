'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {}

    Transactions.init({
    purchased: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        validate: {
          len: [28, 50],
          notEmpty: true,
        }
    },
    sold: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        validate: {
          len: [26, 50],
          notEmpty: true,
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    trans_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'transactions'
  });

  Transactions.associate = (models) => {
    // associations can be defined here
    Transactions.belongsTo(models.User, { foreignKey: "trans_id", as: "transactions" });
  };

  return Transactions;
};